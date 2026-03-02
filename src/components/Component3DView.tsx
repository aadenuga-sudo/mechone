import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Html, useProgress } from '@react-three/drei';
import { Suspense, useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import * as THREE from 'three';
import { MousePointer2 } from 'lucide-react';
import ModelLoader from './ModelLoader';
import ScaleControl from './ScaleControl';
import CameraControls, { type CameraView } from './CameraControls';
import DimensionOverlay from './DimensionOverlay';
import PrintDialog from './PrintDialog';
import CameraAnimator from './CameraAnimator';
import { Button } from './ui/button';
import { Ruler, Grid3x3, Axis3d, Network, RotateCw, Camera, Maximize2, Loader2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { EffectComposer, Vignette, Selection, Outline } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

interface Component3DViewProps {
  specifications: any;
}

import { Progress } from './ui/progress';

function Loader() {
  const { progress } = useProgress();
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "Analyzing specifications...",
    "Synthesizing geometry...",
    "Optimizing mesh topology...",
    "Applying physical constraints...",
    "Finalizing rendering..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex(prev => (prev + 1) % logs.length);
    }, 800); // Change log every 800ms
    return () => clearInterval(interval);
  }, []);

  return (
    <Html center>
      <div className="text-center p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl flex flex-col items-center w-64 border border-white/20">
        <div className="mb-3 font-semibold text-lg bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Generating Model
        </div>

        <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-3" />

        <div className="text-xs text-gray-500 font-mono h-4 relative overflow-hidden w-full">
          <span className="animate-pulse">
            {">"} {logs[logIndex]}
          </span>
        </div>
      </div>
    </Html>
  );
}


const SceneContent = memo(function SceneContent({
  specifications,
  manualScale,
  showDimensions,
  exploded,
  setSelected,
  selected,
  wireframe,
  autoRotate,
  gridVisible,
  axesVisible,
  controlsRef,
  targetView,
  onAnimationComplete,
  outlineRef,
}: any) {
  const { camera, gl, scene } = useThree();
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const modelRootRef = useRef<THREE.Group>(null);
  const explodePartsRef = useRef<THREE.Mesh[]>([]);

  useFrame(() => {
    if (explodePartsRef.current.length === 0) return;

    const t = exploded ? 0.1 : 0.15;
    explodePartsRef.current.forEach((mesh) => {
      mesh.position.lerp(
        exploded ? mesh.userData.explodedPosition : mesh.userData.originalPosition,
        t
      );
    });
  });

  useEffect(() => {
    const outline = outlineRef.current;
    if (!outline) return;

    if (selected) {
      outline.selection.clear();
      outline.selection.add(selected);
    } else {
      outline.selection.clear();
    }
  }, [selected, outlineRef]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      event.preventDefault();

      const mouse = new THREE.Vector2(
        (event.clientX / gl.domElement.clientWidth) * 2 - 1,
        -(event.clientY / gl.domElement.clientHeight) * 2 + 1
      );

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children, true);

      const validIntersects = intersects.filter((intersect) => {
        const obj = intersect.object;
        if (!(obj instanceof THREE.Mesh)) return false;
        if (!modelRootRef.current?.getObjectById(obj.id)) return false;

        const name = obj.name.toLowerCase();
        return !(
          name.includes('shadow') ||
          name.includes('plane') ||
          name.includes('floor') ||
          name.includes('grid') ||
          obj.type === 'GridHelper'
        );
      });

      if (validIntersects.length > 0) {
        const closest = validIntersects[0].object as THREE.Mesh;
        setSelected((prev: THREE.Object3D | null) => (prev?.uuid === closest.uuid ? null : closest));
      }
    };

    gl.domElement.addEventListener('click', handleClick);
    return () => gl.domElement.removeEventListener('click', handleClick);
  }, [camera, gl, raycaster, scene, setSelected]);

  const handleModelLoaded = useCallback((loadedScene: THREE.Group) => {
    modelRootRef.current = loadedScene;
    explodePartsRef.current = [];

    loadedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const posLen = child.position.length();
        if (posLen > 0.01) {
          child.userData.originalPosition = child.position.clone();
          child.userData.explodedPosition = child.position.clone().multiplyScalar(2.8);
          explodePartsRef.current.push(child);
        }
      }
    });
  }, []);

  return (
    <>
      <CameraAnimator
        controlsRef={controlsRef}
        targetView={targetView}
        onAnimationComplete={onAnimationComplete}
      />

      {/* Balanced lighting for white environment */}
      <ambientLight intensity={0.7} />

      <directionalLight
        position={[10, 12, 8]}
        intensity={1.0}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      <directionalLight
        position={[-8, 10, -6]}
        intensity={0.5}
        color="#b0d0ff"
      />

      {/* Bright reflective environment */}
      {/* Environment removed to prevent load crash: <Environment preset="city" background={false} /> */}

      <Selection>
        <EffectComposer multisampling={0} autoClear={false}>
          <Vignette darkness={0.10} blendFunction={BlendFunction.NORMAL} />
          <Outline
            ref={outlineRef}
            blur
            edgeStrength={4}
            pulseSpeed={0}
            visibleEdgeColor={0x00ffff}
            hiddenEdgeColor={0x00ffff}
            blendFunction={BlendFunction.SCREEN}
            xRay={false}
          />
        </EffectComposer>

        <Suspense fallback={<Loader />}>
          <ModelLoader
            componentType={specifications?.component_type || 'robot_arm'}
            specifications={specifications}
            manualScale={manualScale}
            wireframeMode={wireframe}
            onModelLoaded={handleModelLoaded}
          />
          {showDimensions && <DimensionOverlay specifications={specifications} visible={true} />}
          {axesVisible && <axesHelper args={[100]} />}
        </Suspense>
      </Selection>

      {/* Darker, more defined ground shadow */}
      <ContactShadows
        opacity={0.75}
        scale={300}
        blur={2.5}
        far={100}
        resolution={512}
        color="#000000"
      />

      {/* Grey and Black Base */}
      {gridVisible && (
        <gridHelper args={[400, 40, '#000000', '#e5e5e5']} position={[0, 0.01, 0]} />
      )}

      <OrbitControls
        ref={controlsRef}
        enableDamping
        dampingFactor={0.08}
        minDistance={30}
        maxDistance={600}
        target={[0, 20, 0]}
        maxPolarAngle={Math.PI / 2.05}
        autoRotate={autoRotate}
        autoRotateSpeed={1.5}
      />
    </>
  );
});

function Component3DView({ specifications }: Component3DViewProps) {
  const [manualScale, setManualScale] = useState(1.0);
  const [currentView, setCurrentView] = useState<CameraView>('isometric');
  const [targetView, setTargetView] = useState<CameraView | null>(null);
  const [showDimensions, setShowDimensions] = useState(false);
  const [exploded, setExploded] = useState(false);
  const [selected, setSelected] = useState<THREE.Object3D | null>(null);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(true);

  const controlsRef = useRef<any>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationResolveRef = useRef<(() => void) | null>(null);
  const outlineRef = useRef<any>(null);

  const [autoRotate, setAutoRotate] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const [gridVisible, setGridVisible] = useState(true);
  const [axesVisible, setAxesVisible] = useState(true);
  const [showMobileControls, setShowMobileControls] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      switch (e.key) {
        case '+':
        case '=':
          setManualScale((s) => Math.min(s + 0.1, 5));
          break;
        case '-':
        case '_':
          setManualScale((s) => Math.max(s - 0.1, 0.2));
          break;
        case '0':
          setManualScale(1);
          break;
        case 'd':
        case 'D':
          setShowDimensions((v) => !v);
          break;
        case 'h':
        case 'H':
        case '?':
          setShowKeyboardHelp((v) => !v);
          break;
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleViewChange = useCallback((view: CameraView) => {
    setCurrentView(view);
    setTargetView(view);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setTargetView(null);
    animationResolveRef.current?.();
    animationResolveRef.current = null;
  }, []);

  const handleCaptureView = useCallback((view: string): Promise<void> => {
    return new Promise((resolve) => {
      animationResolveRef.current = resolve;
      setTargetView(view as CameraView);
    });
  }, []);

  const handleScreenshot = useCallback(() => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `${specifications?.component_name || 'model'}-view.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  }, [specifications?.component_name]);

  const handleFullscreen = useCallback(() => {
    const elem = canvasRef.current?.parentElement;
    if (!elem) return;
    document.fullscreenElement ? document.exitFullscreen() : elem.requestFullscreen();
  }, []);

  return (
    <div className="space-y-3">
      {/* Control Panel */}
      {/* Control Panel */}
      <div className="rounded-lg border bg-muted/50 overflow-hidden">
        {/* Mobile Collapse Toggle */}
        <div className="md:hidden p-2 flex justify-between items-center cursor-pointer bg-muted/80" onClick={() => setShowMobileControls(!showMobileControls)}>
          <span className="text-xs font-medium text-muted-foreground">3D Controls</span>
          <button className="text-xs font-bold text-primary">{showMobileControls ? "Hide" : "Show"}</button>
        </div>

        <div className={`flex flex-wrap items-center gap-3 p-3 ${showMobileControls ? 'block' : 'hidden'} md:flex`}>
          <div className="flex-1 min-w-[280px]">
            <p className="text-xs text-muted-foreground mb-1.5 font-medium">Camera Views</p>
            <CameraControls onViewChange={handleViewChange} currentView={currentView} />
          </div>

          <div className="hidden lg:block w-px h-12 bg-border" />

          <div className="flex flex-col gap-1.5">
            <p className="text-xs text-muted-foreground font-medium">Display Options</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { icon: Ruler, label: 'Dims', active: showDimensions, toggle: setShowDimensions, tip: 'Toggle dimensions (D)' },
                { icon: Grid3x3, label: 'Grid', active: gridVisible, toggle: setGridVisible, tip: 'Toggle grid' },
                { icon: Axis3d, label: 'Axes', active: axesVisible, toggle: setAxesVisible, tip: 'Toggle axes' },
                { icon: Network, label: 'Wire', active: wireframe, toggle: setWireframe, tip: 'Toggle wireframe' },
                { icon: RotateCw, label: 'Rotate', active: autoRotate, toggle: setAutoRotate, tip: 'Auto-rotate' },
              ].map(({ icon: Icon, label, active, toggle, tip }) => (
                <TooltipProvider key={label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={active ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => toggle(!active)}
                        className="h-7 text-xs"
                      >
                        <Icon className="h-3 w-3 mr-1" />{label}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>{tip}</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-px h-12 bg-border" />

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleScreenshot} className="h-7 text-xs">
              <Camera className="h-3 w-3" /><span className="hidden sm:inline ml-1">Capture</span>
            </Button>
            <Button variant="outline" size="sm" onClick={handleFullscreen} className="h-7 text-xs">
              <Maximize2 className="h-3 w-3" />
            </Button>

            <PrintDialog
              specifications={specifications}
              canvasRef={canvasRef}
              showDimensions={showDimensions}
              onCaptureView={handleCaptureView}
            />
          </div>
        </div>
      </div>

      {/* Canvas Container */}
      <div className="relative w-full h-[350px] md:h-[500px] rounded-lg overflow-hidden border bg-background">
        <ScaleControl scale={manualScale} onScaleChange={setManualScale} />

        {selected && (
          <div className="absolute top-3 right-3 bg-black/75 text-cyan-400 px-3 py-2 rounded-lg text-sm z-10 backdrop-blur">
            Selected: {selected.name || 'Part'}
          </div>
        )}

        {specifications && (
          <div className="absolute top-3 left-3 bg-black/75 text-white p-3 rounded-lg text-sm z-10 backdrop-blur max-w-[280px]">
            <div className="font-bold">{specifications.component_name}</div>
            <div className="text-xs text-gray-400">Type: {specifications.component_type}</div>
          </div>
        )}

        {showKeyboardHelp && (
          <div className="absolute bottom-3 right-3 bg-black/85 text-white p-3 rounded-lg text-xs z-10 backdrop-blur">
            <div className="flex justify-between font-bold mb-2">
              Shortcuts <button onClick={() => setShowKeyboardHelp(false)} className="text-gray-400">×</button>
            </div>
            <div className="text-gray-300 space-y-1">
              <div><kbd>+/-</kbd> Scale</div>
              <div><kbd>D</kbd> Dimensions</div>
              <div><kbd>H</kbd> Help</div>
            </div>
          </div>
        )}

        <Canvas
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [150, 150, 150], fov: 50 }}
          gl={{
            preserveDrawingBuffer: true,
            toneMapping: THREE.ReinhardToneMapping,
            toneMappingExposure: 1.0,
            antialias: true,
          }}
          onCreated={({ gl }) => (canvasRef.current = gl.domElement)}
        >
          {/* White environment */}
          <color attach="background" args={['#ffffff']} />

          <SceneContent
            specifications={specifications}
            manualScale={manualScale}
            showDimensions={showDimensions}
            exploded={exploded}
            setSelected={setSelected}
            selected={selected}
            wireframe={wireframe}
            autoRotate={autoRotate}
            gridVisible={gridVisible}
            axesVisible={axesVisible}
            controlsRef={controlsRef}
            targetView={targetView}
            onAnimationComplete={handleAnimationComplete}
            outlineRef={outlineRef}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default memo(Component3DView);