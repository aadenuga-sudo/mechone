import { useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

interface DimensionOverlayProps {
  specifications: any;
  visible: boolean;
  modelRef?: React.RefObject<THREE.Group>;
}

interface DimensionLineProps {
  start: THREE.Vector3;
  end: THREE.Vector3;
  label: string;
  color?: string;
  extensionLength?: number;
  extensionDirection?: THREE.Vector3;
}

// Clean technical drawing style dimension line
function DimensionLine({
  start,
  end,
  label,
  color = "#ffffff",
  extensionLength = 1.5,
  extensionDirection = new THREE.Vector3(0, 1, 0)
}: DimensionLineProps) {
  const midPoint = useMemo(() => {
    return new THREE.Vector3().lerpVectors(start, end, 0.5);
  }, [start, end]);

  // Direction from start to end
  const direction = useMemo(() => {
    return new THREE.Vector3().subVectors(end, start).normalize();
  }, [start, end]);

  // Perpendicular for arrow heads
  const perpendicular = useMemo(() => {
    const perp = new THREE.Vector3();
    if (Math.abs(direction.y) < 0.9) {
      perp.crossVectors(direction, new THREE.Vector3(0, 1, 0)).normalize();
    } else {
      perp.crossVectors(direction, new THREE.Vector3(1, 0, 0)).normalize();
    }
    return perp;
  }, [direction]);

  // Extension lines - thin lines extending from component edges
  const extStart1 = useMemo(() => start.clone().sub(extensionDirection.clone().multiplyScalar(extensionLength * 0.3)), [start, extensionDirection, extensionLength]);
  const extEnd1 = useMemo(() => start.clone().add(extensionDirection.clone().multiplyScalar(extensionLength)), [start, extensionDirection, extensionLength]);
  const extStart2 = useMemo(() => end.clone().sub(extensionDirection.clone().multiplyScalar(extensionLength * 0.3)), [end, extensionDirection, extensionLength]);
  const extEnd2 = useMemo(() => end.clone().add(extensionDirection.clone().multiplyScalar(extensionLength)), [end, extensionDirection, extensionLength]);

  // Arrow tick marks (short perpendicular lines at endpoints)
  const arrowSize = 2;
  const tick1Start = useMemo(() => start.clone().add(perpendicular.clone().multiplyScalar(arrowSize)), [start, perpendicular]);
  const tick1End = useMemo(() => start.clone().sub(perpendicular.clone().multiplyScalar(arrowSize)), [start, perpendicular]);
  const tick2Start = useMemo(() => end.clone().add(perpendicular.clone().multiplyScalar(arrowSize)), [end, perpendicular]);
  const tick2End = useMemo(() => end.clone().sub(perpendicular.clone().multiplyScalar(arrowSize)), [end, perpendicular]);

  // Label position offset - Move UP from the line (Y-axis) to "float" above/beside
  const labelPosition = useMemo(() => {
    // Determine if line is vertical (mostly Y-axis)
    const isVertical = Math.abs(direction.y) > 0.9;

    if (isVertical) {
      // For vertical lines, offset label sideways (along extension direction)
      return midPoint.clone().add(extensionDirection.clone().multiplyScalar(2));
    } else {
      // For horizontal lines, offset label UP
      return midPoint.clone().add(new THREE.Vector3(0, 1, 0).multiplyScalar(2));
    }
  }, [midPoint, direction, extensionDirection]);

  return (
    <group>
      {/* Extension line 1 */}
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([extStart1.x, extStart1.y, extStart1.z, extEnd1.x, extEnd1.y, extEnd1.z])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color={color} opacity={0.5} transparent />
      </line>

      {/* Extension line 2 */}
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([extStart2.x, extStart2.y, extStart2.z, extEnd2.x, extEnd2.y, extEnd2.z])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color={color} opacity={0.5} transparent />
      </line>

      {/* Main dimension line */}
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([start.x, start.y, start.z, end.x, end.y, end.z])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color={color} />
      </line>

      {/* Tick mark at start */}
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([tick1Start.x, tick1Start.y, tick1Start.z, tick1End.x, tick1End.y, tick1End.z])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color={color} />
      </line>

      {/* Tick mark at end */}
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([tick2Start.x, tick2Start.y, tick2Start.z, tick2End.x, tick2End.y, tick2End.z])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color={color} />
      </line>

      {/* Label using drei Text (renders to canvas, not HTML) */}
      <Text
        position={[labelPosition.x, labelPosition.y, labelPosition.z]}
        fontSize={4}
        color={color}
        anchorX="center"
        anchorY="bottom" // Sit on top of the position point
        outlineWidth={0.3}
        outlineColor="#000000"
      >
        {label}
      </Text>
    </group>
  );
}

// Diameter indicator for circular components
function DiameterIndicator({
  center,
  radius,
  height,
  label,
  color = "#ffffff"
}: {
  center: THREE.Vector3;
  radius: number;
  height: number;
  label: string;
  color?: string;
}) {
  const start = useMemo(() => new THREE.Vector3(center.x - radius, center.y + height, center.z), [center, radius, height]);
  const end = useMemo(() => new THREE.Vector3(center.x + radius, center.y + height, center.z), [center, radius, height]);
  const midPoint = useMemo(() => new THREE.Vector3(center.x, center.y + height + 0.5, center.z), [center, height]);

  return (
    <group>
      {/* Diameter line */}
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([start.x, start.y, start.z, end.x, end.y, end.z])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color={color} />
      </line>

      {/* Label */}
      <Text
        position={[midPoint.x, midPoint.y, midPoint.z]}
        fontSize={4}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.3}
        outlineColor="#000000"
      >
        {label}
      </Text>
    </group>
  );
}

function DimensionOverlay({ specifications, visible, modelRef }: DimensionOverlayProps) {
  const { scene } = useThree();
  const [boundingBox, setBoundingBox] = useState<THREE.Box3 | null>(null);

  // Calculate bounding box from the actual model
  useEffect(() => {
    if (!visible) return;

    const calculateBounds = () => {
      let targetObject: THREE.Object3D | null = null;

      if (modelRef?.current) {
        targetObject = modelRef.current;
      } else {
        scene.traverse((child) => {
          if (child.type === 'Group' && child.children.some(c => c.type === 'Mesh')) {
            if (!child.userData.isDimensionOverlay) {
              targetObject = child;
            }
          }
        });
      }

      if (targetObject) {
        const box = new THREE.Box3().setFromObject(targetObject);
        if (box.min.x !== Infinity) {
          setBoundingBox(box);
        }
      }
    };

    const timer = setTimeout(calculateBounds, 100);
    return () => clearTimeout(timer);
  }, [visible, scene, modelRef]);

  if (!visible) return null;

  const dimensions = specifications?.specifications?.dimensions || {};

  // Parse dimension values to numbers
  const parseValue = (val: string | number | undefined): number | null => {
    if (!val) return null;
    if (typeof val === 'number') return val;
    const match = val.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : null;
  };

  // Get dimension values
  const length = parseValue(dimensions.length);
  const width = parseValue(dimensions.width);
  const height = parseValue(dimensions.height);
  const diameter = parseValue(dimensions.diameter);

  // Use bounding box for positioning
  let boxSize = { x: 50, y: 50, z: 50 };
  let boxCenter = new THREE.Vector3(0, 25, 0);

  if (boundingBox) {
    const size = new THREE.Vector3();
    boundingBox.getSize(size);
    boxCenter = new THREE.Vector3();
    boundingBox.getCenter(boxCenter);
    boxSize = { x: size.x, y: size.y, z: size.z };
  }

  // Calculate display dimensions
  const displayLength = length || boxSize.x;
  const displayWidth = width || boxSize.z;
  const displayHeight = height || boxSize.y;

  // Position calculations
  const offset = 0.5; // Reduced to minimum to be flush with model
  const minY = boundingBox ? boundingBox.min.y : 0;
  const maxY = boundingBox ? boundingBox.max.y : displayHeight;
  const minX = boundingBox ? boundingBox.min.x : -displayLength / 2;
  const maxX = boundingBox ? boundingBox.max.x : displayLength / 2;
  const minZ = boundingBox ? boundingBox.min.z : -displayWidth / 2;
  const maxZ = boundingBox ? boundingBox.max.z : displayWidth / 2;

  // Format dimension text
  const lengthText = dimensions.length || `${displayLength.toFixed(1)} mm`;
  const widthText = dimensions.width || `${displayWidth.toFixed(1)} mm`;
  const heightText = dimensions.height || `${displayHeight.toFixed(1)} mm`;
  const diameterText = dimensions.diameter || `Ø ${(diameter || displayLength).toFixed(1)} mm`;

  return (
    <group userData={{ isDimensionOverlay: true }}>
      {/* LENGTH - Front (X-axis) */}
      <DimensionLine
        start={new THREE.Vector3(minX, minY, maxZ + offset)}
        end={new THREE.Vector3(maxX, minY, maxZ + offset)}
        label={lengthText}
        color="#ffffff"
        extensionDirection={new THREE.Vector3(0, 0, 1)}
      />

      {/* WIDTH - Right side (Z-axis) */}
      <DimensionLine
        start={new THREE.Vector3(maxX + offset, minY, minZ)}
        end={new THREE.Vector3(maxX + offset, minY, maxZ)}
        label={widthText}
        color="#ffffff"
        extensionDirection={new THREE.Vector3(1, 0, 0)}
      />

      {/* HEIGHT - Right front corner (Y-axis) */}
      <DimensionLine
        start={new THREE.Vector3(maxX + offset, minY, maxZ + offset)}
        end={new THREE.Vector3(maxX + offset, maxY, maxZ + offset)}
        label={heightText}
        color="#ffffff"
        extensionDirection={new THREE.Vector3(1, 0, 1).normalize()}
      />

      {/* DIAMETER - For circular components */}
      {diameter && (
        <DiameterIndicator
          center={boxCenter}
          radius={diameter / 2}
          height={(maxY - boxCenter.y) + 3}
          label={diameterText}
          color="#ffffff"
        />
      )}
    </group>
  );
}

export default DimensionOverlay;
