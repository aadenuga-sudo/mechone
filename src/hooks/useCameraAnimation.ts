import { useThree } from '@react-three/fiber';
import { useCallback, useRef, useEffect } from 'react';
import * as THREE from 'three';
import type { CameraView } from '@/components/CameraControls';

interface CameraPosition {
  position: THREE.Vector3;
  target: THREE.Vector3;
}

const cameraPositions: Record<CameraView, CameraPosition> = {
  front: {
    position: new THREE.Vector3(0, 50, 250),
    target: new THREE.Vector3(0, 50, 0),
  },
  side: {
    position: new THREE.Vector3(250, 50, 0),
    target: new THREE.Vector3(0, 50, 0),
  },
  top: {
    position: new THREE.Vector3(0, 300, 0),
    target: new THREE.Vector3(0, 0, 0),
  },
  isometric: {
    position: new THREE.Vector3(150, 150, 150),
    target: new THREE.Vector3(0, 20, 0),
  },
  back: {
    position: new THREE.Vector3(0, 50, -250),
    target: new THREE.Vector3(0, 50, 0),
  },
  bottom: {
    position: new THREE.Vector3(0, -200, 50),
    target: new THREE.Vector3(0, 0, 0),
  },
  reset: {
    position: new THREE.Vector3(150, 150, 150),
    target: new THREE.Vector3(0, 20, 0),
  },
};

export function useCameraAnimation(controlsRef: React.RefObject<any>) {
  const { camera } = useThree();
  const animationRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);

  const animateCamera = useCallback((view: CameraView) => {
    if (isAnimatingRef.current) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    const targetPosition = cameraPositions[view];
    if (!targetPosition) return;

    const startPosition = camera.position.clone();
    const endPosition = targetPosition.position.clone();
    const startTarget = controlsRef.current?.target?.clone() || new THREE.Vector3(0, 20, 0);
    const endTarget = targetPosition.target.clone();

    const duration = 400; // ms
    const startTime = performance.now();
    isAnimatingRef.current = true;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);

      camera.position.lerpVectors(startPosition, endPosition, eased);
      
      if (controlsRef.current) {
        const currentTarget = new THREE.Vector3().lerpVectors(startTarget, endTarget, eased);
        controlsRef.current.target.copy(currentTarget);
        controlsRef.current.update();
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        isAnimatingRef.current = false;
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [camera, controlsRef]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return { animateCamera };
}
