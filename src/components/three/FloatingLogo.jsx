import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingLogo({ position = [0, 2.5, 0] }) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.25;
      meshRef.current.rotation.y += delta * 0.8;
      meshRef.current.rotation.z = Math.sin(t * 0.8) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.4;
      ringRef.current.rotation.y += delta * 0.6;
    }
  });

  // Flutter dual-chevron stylized 3D form
  return (
    <group position={position}>
      {/* Outer Hologram Energy Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.6, 0.03, 16, 50]} />
        <meshBasicMaterial 
          color="#00D9FF" 
          transparent 
          opacity={0.6} 
          wireframe 
        />
      </mesh>

      {/* Floating 3D Flutter Crystal / Prisms */}
      <group ref={meshRef}>
        {/* Top wing */}
        <mesh position={[0.3, 0.4, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.9, 0.25, 0.25]} />
          <meshStandardMaterial 
            color="#02569B" 
            emissive="#0175C2" 
            emissiveIntensity={0.6} 
            metalness={0.8} 
            roughness={0.2} 
          />
        </mesh>

        {/* Bottom wing */}
        <mesh position={[0.1, -0.4, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[1.1, 0.25, 0.25]} />
          <meshStandardMaterial 
            color="#00D9FF" 
            emissive="#00D9FF" 
            emissiveIntensity={0.8} 
            metalness={0.8} 
            roughness={0.2} 
          />
        </mesh>

        {/* Center core pulse */}
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.35, 0]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
      </group>
    </group>
  );
}

