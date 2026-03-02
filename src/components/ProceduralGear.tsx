import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ProceduralGearProps {
  numTeeth?: number;
  radius?: number;
  thickness?: number;
  color?: string;
  manualScale?: number;   // Uniform scale (overall size)
  scaleY?: number;        // NEW: Independent thickness scaling
}

function ProceduralGear({ 
  numTeeth = 30, 
  radius = 50, 
  thickness = 8, 
  color = "#888888",
  manualScale = 1.0,
  scaleY = 1.0              // Default: no extra Y scaling
}: ProceduralGearProps) {
  const gearRef = useRef<THREE.Group>(null);
  
  // Slow rotation animation
  useFrame(() => {
    if (gearRef.current) {
      gearRef.current.rotation.z += 0.003;
    }
  });
  
  // Gear shape definition (same as before)
  const gearShape = new THREE.Shape();
  const outerRadius = radius;
  const innerRadius = radius * 0.6;
  const toothDepth = radius * 0.15;
  const toothWidth = (Math.PI * 2 / numTeeth) * 0.4;
  
  for (let i = 0; i <= numTeeth; i++) {
    const angle = (i / numTeeth) * Math.PI * 2;
    const nextAngle = ((i + 1) / numTeeth) * Math.PI * 2;
    
    const x1 = Math.cos(angle) * outerRadius;
    const y1 = Math.sin(angle) * outerRadius;
    
    const x2 = Math.cos(angle + toothWidth / 2) * (outerRadius + toothDepth);
    const y2 = Math.sin(angle + toothWidth / 2) * (outerRadius + toothDepth);
    
    const x3 = Math.cos(nextAngle - toothWidth / 2) * (outerRadius + toothDepth);
    const y3 = Math.sin(nextAngle - toothWidth / 2) * (outerRadius + toothDepth);
    
    if (i === 0) {
      gearShape.moveTo(x1, y1);
    } else {
      gearShape.lineTo(x1, y1);
    }
    gearShape.lineTo(x2, y2);
    gearShape.lineTo(x3, y3);
  }
  gearShape.closePath();
  
  // Center hole
  const holePath = new THREE.Path();
  for (let i = 0; i <= 32; i++) {
    const angle = (i / 32) * Math.PI * 2;
    const x = Math.cos(angle) * innerRadius;
    const y = Math.sin(angle) * innerRadius;
    if (i === 0) {
      holePath.moveTo(x, y);
    } else {
      holePath.lineTo(x, y);
    }
  }
  gearShape.holes.push(holePath);
  
  const extrudeSettings = {
    depth: thickness,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 0.5,
    bevelSegments: 2
  };
  
  console.log('PROCEDURAL GEAR:', numTeeth, 'teeth, radius:', radius, 'thickness:', thickness, 'manualScale:', manualScale, 'scaleY:', scaleY);
  
  return (
    <group 
      ref={gearRef} 
      scale={[manualScale, manualScale * scaleY, manualScale]}  // X and Z: uniform, Y: stretched independently
    >
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <extrudeGeometry args={[gearShape, extrudeSettings]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default ProceduralGear;