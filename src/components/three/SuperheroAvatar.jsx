import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * SuperheroAvatar Component
 * Original tech-suit superhero perched on a high-rise rooftop ledge overlooking the neon city.
 * To replace with your own custom 3D model:
 * Place your `avatar.glb` in `/public/models/avatar.glb` and uncomment the `useGLTF` hook below.
 */
// import { useGLTF } from '@react-three/drei';

export default function SuperheroAvatar({ mouse }) {
  const avatarGroupRef = useRef();

  // NOTE FOR USER: When you have your own GLB model ready, uncomment:
  // const { scene } = useGLTF('/models/avatar.glb');
  // return <primitive object={scene} scale={1.2} position={[-2.2, 0, 3.8]} />;

  useFrame((state) => {
    if (avatarGroupRef.current) {
      const t = state.clock.getElapsedTime();
      // Gentle breathing idle
      avatarGroupRef.current.position.y = 0.2 + Math.sin(t * 1.6) * 0.03;

      // Hero subtly tracks mouse looking out over the city
      const targetRotY = 0.35 + (mouse?.normalizedX || 0) * 0.25;
      avatarGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        avatarGroupRef.current.rotation.y,
        targetRotY,
        0.06
      );
    }
  });

  return (
    // Perched on left-foreground rooftop ledge
    <group ref={avatarGroupRef} position={[-2.2, 0.2, 3.8]}>
      {/* Rooftop Gargoyle / Ledge Platform */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[1.8, 0.6, 1.8]} />
        <meshStandardMaterial 
          color="#151d2f" 
          roughness={0.6} 
          metalness={0.4} 
        />
      </mesh>
      {/* Neon Cyan Edge Accent on Ledge */}
      <mesh position={[0, -0.22, 0.9]}>
        <boxGeometry args={[1.82, 0.06, 0.06]} />
        <meshBasicMaterial color="#00D9FF" />
      </mesh>

      {/* Stylized Superhero Character Body (Crouching Spider Vigilante Pose) */}
      <group position={[0, 0.3, 0.1]}>
        {/* Torso / Tech Suit in Spider-Verse Deep Navy & Red */}
        <mesh position={[0, 0.15, 0]} castShadow>
          <capsuleGeometry args={[0.32, 0.5, 8, 16]} />
          <meshStandardMaterial 
            color="#121829" 
            roughness={0.35} 
            metalness={0.6} 
          />
        </mesh>

        {/* Emissive Red Arachnid Chest Emblem */}
        <mesh position={[0, 0.24, 0.3]}>
          <planeGeometry args={[0.26, 0.26]} />
          <meshBasicMaterial color="#FF2E36" />
        </mesh>

        {/* Blue Tech Shoulders */}
        <mesh position={[-0.34, 0.28, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#1464F4" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.34, 0.28, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#1464F4" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Head with Hood / Mask */}
        <group position={[0, 0.64, 0.08]}>
          {/* Mask */}
          <mesh castShadow>
            <sphereGeometry args={[0.26, 16, 16]} />
            <meshStandardMaterial 
              color="#0d1424" 
              roughness={0.4} 
              metalness={0.5} 
            />
          </mesh>

          {/* Mask Red Web Accent Stripe */}
          <mesh position={[0, 0.02, 0.25]}>
            <planeGeometry args={[0.1, 0.35]} />
            <meshBasicMaterial color="#E62429" />
          </mesh>

          {/* Glowing Angular Cybernetic Eyes (Spider-Verse Visor) */}
          <mesh position={[-0.09, 0.04, 0.24]} rotation={[0, 0.15, 0.1]}>
            <boxGeometry args={[0.08, 0.03, 0.04]} />
            <meshBasicMaterial color="#00D9FF" />
          </mesh>
          <mesh position={[0.09, 0.04, 0.24]} rotation={[0, -0.15, -0.1]}>
            <boxGeometry args={[0.08, 0.03, 0.04]} />
            <meshBasicMaterial color="#00D9FF" />
          </mesh>
        </group>

        {/* Crouched Arms resting forward */}
        <mesh position={[-0.3, -0.06, 0.22]} rotation={[0.4, 0.2, -0.3]}>
          <capsuleGeometry args={[0.09, 0.4, 4, 8]} />
          <meshStandardMaterial color="#121829" metalness={0.6} />
        </mesh>
        <mesh position={[0.3, -0.06, 0.22]} rotation={[0.4, -0.2, 0.3]}>
          <capsuleGeometry args={[0.09, 0.4, 4, 8]} />
          <meshStandardMaterial color="#121829" metalness={0.6} />
        </mesh>

        {/* Web Shooter Gauntlets with glowing red LEDs */}
        <mesh position={[-0.36, -0.22, 0.32]}>
          <boxGeometry args={[0.08, 0.08, 0.08]} />
          <meshBasicMaterial color="#FF2E36" />
        </mesh>
        <mesh position={[0.36, -0.22, 0.32]}>
          <boxGeometry args={[0.08, 0.08, 0.08]} />
          <meshBasicMaterial color="#FF2E36" />
        </mesh>
      </group>

      {/* Dedicated Rim Light on Hero to pop out from background */}
      <pointLight 
        position={[0.5, 1.2, 0.8]} 
        color="#00D9FF" 
        intensity={2.4} 
        distance={4} 
      />
      <pointLight 
        position={[-0.8, 1, -0.5]} 
        color="#E62429" 
        intensity={2.8} 
        distance={4} 
      />
    </group>
  );
}
