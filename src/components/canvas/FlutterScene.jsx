import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei';

function FlutterPrisms() {
  const groupRef = useRef();
  const wingTop = useRef();
  const wingBottom = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }
    if (wingTop.current) {
      wingTop.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2) * 0.15;
    }
    if (wingBottom.current) {
      wingBottom.current.rotation.z = Math.cos(state.clock.elapsedTime * 1.0) * 0.12;
    }
  });

  return (
    <group ref={groupRef} scale={1.15}>
      {/* Upper Wing Element: Flutter Cyan Faceted Prism */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh ref={wingTop} position={[0, 0.45, 0]} rotation={[0.4, 0.3, -0.2]}>
          <octahedronGeometry args={[0.9, 0]} />
          <MeshDistortMaterial
            color="#40C4FF"
            roughness={0.15}
            metalness={0.85}
            distort={0.2}
            speed={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Lower Wing Element: Flutter Deep Navy Prism */}
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.3}>
        <mesh ref={wingBottom} position={[0.25, -0.45, 0.1]} rotation={[-0.3, -0.4, 0.3]}>
          <octahedronGeometry args={[0.75, 0]} />
          <MeshDistortMaterial
            color="#0175C2"
            roughness={0.2}
            metalness={0.7}
            distort={0.18}
            speed={1.2}
          />
        </mesh>
      </Float>

      {/* Central Core Glow Sphere */}
      <mesh position={[0, 0, 0]} scale={0.32}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color="#80D8FF"
          emissive="#29B6F6"
          emissiveIntensity={1.8}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

export default function FlutterScene({ isDark = true }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={isDark ? 0.8 : 1.35} />
      <directionalLight
        position={[4, 5, 4]}
        intensity={isDark ? 2.6 : 3.0}
        color={isDark ? '#E0F7FA' : '#FFFFFF'}
      />
      <pointLight
        position={[-4, -3, 2]}
        intensity={isDark ? 3.5 : 2.4}
        color={isDark ? '#02569B' : '#0288D1'}
      />
      <pointLight
        position={[3, -2, 3]}
        intensity={isDark ? 2.8 : 2.2}
        color={isDark ? '#40C4FF' : '#0091EA'}
      />
      <Suspense fallback={null}>
        <FlutterPrisms />
        {isDark && (
          <Stars radius={30} depth={15} count={400} factor={2} saturation={0} fade speed={0.6} />
        )}
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}
