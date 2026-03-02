import * as THREE from 'three';

interface ProceduralBoltProps {
  length?: number;
  diameter?: number;
  threadPitch?: number;
  manualScale?: number;
}

function ProceduralBolt({ 
  length = 60, 
  diameter = 8, 
  threadPitch = 1.5,
  manualScale = 1.0
}: ProceduralBoltProps) {
  
  const headHeight = diameter * 0.7;
  const headDiameter = diameter * 1.5;
  
  console.log('🔩 PROCEDURAL BOLT:', diameter, 'mm x', length, 'mm');
  
  return (
    <group scale={[manualScale, manualScale, manualScale]}>
      {/* Hexagonal bolt head */}
      <mesh position={[0, length / 2 + headHeight / 2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[headDiameter / 2, headDiameter / 2, headHeight, 6]} />
        <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Bolt shaft */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[diameter / 2, diameter / 2, length, 32]} />
        <meshStandardMaterial color="#999999" metalness={0.85} roughness={0.15} />
      </mesh>
      
      {/* Thread visualization (spiral rings) */}
      {Array.from({ length: Math.floor(length / (threadPitch * 3)) }).map((_, i) => {
        const yPos = -length / 2 + i * threadPitch * 3;
        return (
          <mesh key={i} position={[0, yPos, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[diameter / 2 + 0.4, 0.4, 8, 16]} />
            <meshStandardMaterial color="#777777" metalness={0.8} roughness={0.2} />
          </mesh>
        );
      })}
      
      {/* Pointed tip */}
      <mesh position={[0, -length / 2 - diameter / 3, 0]} castShadow receiveShadow>
        <coneGeometry args={[diameter / 2, diameter / 2, 8]} />
        <meshStandardMaterial color="#999999" metalness={0.85} roughness={0.15} />
      </mesh>
    </group>
  );
}

export default ProceduralBolt;
