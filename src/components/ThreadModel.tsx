import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Thread strand component
const ThreadStrand = ({ 
  position, 
  rotation, 
  color, 
  length = 3, 
  thickness = 0.02 
}: { 
  position: [number, number, number], 
  rotation: [number, number, number], 
  color: string, 
  length?: number, 
  thickness?: number 
}) => {
  return (
    <mesh position={position} rotation={rotation}>
      <cylinderGeometry args={[thickness, thickness, length, 32]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2}
        emissive="#404040"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

// Thread spool component
const ThreadSpool = ({ position = [0, -1.5, 0] }: { position?: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Main spool body */}
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshStandardMaterial 
          color="#8B4513" 
          metalness={0.5} 
          roughness={0.7}
        />
      </mesh>
      
      {/* Spool sides */}
      <mesh position={[0, 0.1, 0]}>
        <torusGeometry args={[0.5, 0.05, 16, 32]} />
        <meshStandardMaterial 
          color="#A0522D" 
          metalness={0.5} 
          roughness={0.7}
        />
      </mesh>
      
      <mesh position={[0, -0.1, 0]}>
        <torusGeometry args={[0.5, 0.05, 16, 32]} />
        <meshStandardMaterial 
          color="#A0522D" 
          metalness={0.5} 
          roughness={0.7}
        />
      </mesh>
    </group>
  );
};

// Particle component
const Particle = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float
      speed={1.5} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
    >
      <mesh position={position}>
        <sphereGeometry args={[0.01, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

// Main ThreadModel component
const ThreadModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const time = useRef(0);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (groupRef.current) {
      time.current += delta * 0.5;
      
      // Smooth floating animation
      groupRef.current.position.y = Math.sin(time.current * 0.5) * 0.2;
      
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(time.current * 0.3) * 0.2;
      groupRef.current.rotation.x = Math.cos(time.current * 0.2) * 0.1;
      
      // Scale animation on hover
      if (hovered) {
        groupRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
      } else {
        groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main thread strands */}
      <ThreadStrand 
        position={[0, 0, 0]} 
        rotation={[0, 0, 0]} 
        color="#f0f0f0" 
      />
      
      <ThreadStrand 
        position={[1, 1, 0]} 
        rotation={[0, 0, Math.PI / 4]} 
        color="#e0e0e0" 
      />
      
      <ThreadStrand 
        position={[-1, -1, 0]} 
        rotation={[0, 0, -Math.PI / 4]} 
        color="#d0d0d0" 
      />
      
      {/* Additional thread strands for more complexity */}
      <ThreadStrand 
        position={[0.7, -0.7, 0]} 
        rotation={[0, 0, -Math.PI / 6]} 
        color="#e8e8e8" 
        length={2.5}
      />
      
      <ThreadStrand 
        position={[-0.7, 0.7, 0]} 
        rotation={[0, 0, Math.PI / 6]} 
        color="#d8d8d8" 
        length={2.5}
      />
      
      {/* Thread spool */}
      <ThreadSpool />
      
      {/* Decorative particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <Particle 
          key={i}
          position={[
            Math.sin(i * 0.5) * 2,
            Math.cos(i * 0.5) * 2,
            Math.sin(i * 0.3) * 2,
          ]}
        />
      ))}
    </group>
  );
};

export default ThreadModel; 