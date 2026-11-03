import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Generate procedural night skyscraper window texture
function createWindowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Dark building facade base
  ctx.fillStyle = '#080d1a';
  ctx.fillRect(0, 0, 256, 512);

  // Draw illuminated window grid
  const cols = 10;
  const rows = 28;
  const w = 14;
  const h = 10;
  const gapX = 10;
  const gapY = 8;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isLit = Math.random() > 0.42;
      const x = 12 + c * (w + gapX);
      const y = 14 + r * (h + gapY);

      if (isLit) {
        const rand = Math.random();
        if (rand < 0.4) {
          ctx.fillStyle = '#ffeaa7'; // Warm golden office light
        } else if (rand < 0.72) {
          ctx.fillStyle = '#00d9ff'; // Cyber neon cyan
        } else if (rand < 0.88) {
          ctx.fillStyle = '#ff2e36'; // Spider-verse red
        } else {
          ctx.fillStyle = '#4a90e2'; // Electric blue
        }
        ctx.fillRect(x, y, w, h);
      } else {
        ctx.fillStyle = '#101626'; // Dark tinted glass
        ctx.fillRect(x, y, w, h);
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export default function CityScene({ mouse }) {
  const groupRef = useRef();
  const trafficRedRef = useRef();
  const trafficCyanRef = useRef();
  const searchlight1Ref = useRef();
  const searchlight2Ref = useRef();

  const windowTexture = useMemo(() => createWindowTexture(), []);

  // Generate organized city blocks with dense skyscrapers
  const buildings = useMemo(() => {
    const list = [];
    // Grid of avenues & streets
    const gridX = 7;
    const gridZ = 7;
    const spacingX = 4.2;
    const spacingZ = 4.2;

    for (let i = -gridX; i <= gridX; i++) {
      for (let j = -gridZ; j <= gridZ; j++) {
        // Leave gaps for main avenues
        if (i === 0 || j === 0) continue;
        if (Math.random() < 0.15) continue; // Random plaza/parks

        const x = i * spacingX + (Math.random() - 0.5) * 0.8;
        const z = j * spacingZ + (Math.random() - 0.5) * 0.8 - 6;

        const distFromCenter = Math.sqrt(x * x + z * z);
        // Taller towers toward downtown center
        const height = Math.max(6, 26 - distFromCenter * 0.55 + Math.random() * 8);
        const width = 2.4 + Math.random() * 1.2;
        const depth = 2.4 + Math.random() * 1.2;

        const hasNeonRoof = Math.random() > 0.4;
        const roofColor = Math.random() > 0.5 ? '#E62429' : '#00D9FF';
        const hasSpire = height > 16;
        const hasBillboard = height > 14 && Math.random() > 0.65;
        const billboardText = Math.random() > 0.5 ? 'FLUTTER' : 'EARTH-616';

        list.push({
          x,
          z,
          height,
          width,
          depth,
          hasNeonRoof,
          roofColor,
          hasSpire,
          hasBillboard,
          billboardText
        });
      }
    }
    return list;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Subtle gentle camera sway following mouse
    if (groupRef.current) {
      const targetRotY = (mouse?.normalizedX || 0) * 0.08;
      const targetRotX = (mouse?.normalizedY || 0) * 0.04;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    }

    // Traffic light streams animation
    if (trafficRedRef.current) {
      trafficRedRef.current.position.z = ((t * 8) % 60) - 30;
    }
    if (trafficCyanRef.current) {
      trafficCyanRef.current.position.z = -(((t * 10) % 60) - 30);
    }

    // Searchlights sweeping night sky
    if (searchlight1Ref.current) {
      searchlight1Ref.current.rotation.z = Math.sin(t * 0.7) * 0.4;
      searchlight1Ref.current.rotation.x = Math.cos(t * 0.5) * 0.3 + 0.3;
    }
    if (searchlight2Ref.current) {
      searchlight2Ref.current.rotation.z = -Math.cos(t * 0.6) * 0.4;
      searchlight2Ref.current.rotation.x = Math.sin(t * 0.4) * 0.3 + 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Interactive Orbit Controls with constrained angles for smooth exploration */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2 - 0.08}
        minPolarAngle={Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
        rotateSpeed={0.4}
      />

      {/* Spider-Verse Night Sky Ambient & Fog */}
      <fog attach="fog" args={['#070a14', 18, 55]} />

      {/* Ground City Mesh with Glowing Cyber Streets */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, -6]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#060912" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Avenue Glowing Grid Lines */}
      <gridHelper 
        args={[80, 24, '#E62429', '#1464F4']} 
        position={[0, 0, -6]} 
      />

      {/* Traffic Light Ribbons (Red & Cyan light streaks on main avenues) */}
      <group position={[0, 0.1, -6]}>
        {/* Avenue Traffic - Moving Red Taillights */}
        <mesh ref={trafficRedRef} position={[-2.1, 0, 0]}>
          <boxGeometry args={[0.3, 0.08, 12]} />
          <meshBasicMaterial color="#FF2E36" />
        </mesh>
        {/* Avenue Traffic - Moving Cyan Headlights */}
        <mesh ref={trafficCyanRef} position={[2.1, 0, 0]}>
          <boxGeometry args={[0.3, 0.08, 12]} />
          <meshBasicMaterial color="#00D9FF" />
        </mesh>
      </group>

      {/* Skyscraper Buildings */}
      {buildings.map((b, i) => (
        <group key={i} position={[b.x, b.height / 2, b.z]}>
          {/* Main Tower Box with Window Texture */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[b.width, b.height, b.depth]} />
            <meshStandardMaterial 
              color="#ffffff"
              map={windowTexture}
              roughness={0.4} 
              metalness={0.5}
            />
          </mesh>

          {/* Glowing Rooftop Neon Edge Trim */}
          {b.hasNeonRoof && (
            <mesh position={[0, b.height / 2 + 0.06, 0]}>
              <boxGeometry args={[b.width + 0.08, 0.12, b.depth + 0.08]} />
              <meshBasicMaterial color={b.roofColor} />
            </mesh>
          )}

          {/* Roof Spire with Pulsing Red/Cyan Beacon */}
          {b.hasSpire && (
            <group position={[0, b.height / 2, 0]}>
              <mesh position={[0, 1.2, 0]}>
                <cylinderGeometry args={[0.04, 0.16, 2.4, 8]} />
                <meshStandardMaterial color="#32405d" metalness={0.9} />
              </mesh>
              {/* Top blinking warning beacon */}
              <mesh position={[0, 2.45, 0]}>
                <sphereGeometry args={[0.14, 8, 8]} />
                <meshBasicMaterial color="#FF2E36" />
              </mesh>
            </group>
          )}

          {/* Rooftop Holographic Billboard */}
          {b.hasBillboard && (
            <mesh position={[0, b.height / 2 + 0.8, 0]}>
              <boxGeometry args={[b.width * 0.8, 0.9, 0.12]} />
              <meshBasicMaterial color={b.roofColor} />
            </mesh>
          )}
        </group>
      ))}

      {/* Superhero Night Searchlights */}
      <group position={[-12, 0, -14]} ref={searchlight1Ref}>
        <mesh position={[0, 16, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 4.5, 32, 16, 1, true]} />
          <meshBasicMaterial 
            color="#00D9FF" 
            transparent 
            opacity={0.12} 
            side={THREE.DoubleSide} 
          />
        </mesh>
      </group>

      <group position={[14, 0, -18]} ref={searchlight2Ref}>
        <mesh position={[0, 16, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 4.8, 32, 16, 1, true]} />
          <meshBasicMaterial 
            color="#E62429" 
            transparent 
            opacity={0.12} 
            side={THREE.DoubleSide} 
          />
        </mesh>
      </group>

      {/* Spider-Verse Cinematic Lighting Environment */}
      {/* High-ambient fill to illuminate building facades */}
      <ambientLight intensity={1.1} color="#182238" />

      {/* Spider-Red Dramatic Side Key Light */}
      <directionalLight
        position={[-20, 22, 15]}
        intensity={3.2}
        color="#E62429"
        castShadow
      />

      {/* Electric Blue & Cyan Horizon Fill Light */}
      <directionalLight
        position={[22, 25, 12]}
        intensity={3.6}
        color="#00D9FF"
      />

      {/* Overhead Moon/Cityglow Soft Spot */}
      <pointLight
        position={[0, 30, 5]}
        intensity={2.2}
        color="#ffffff"
        distance={60}
      />
    </group>
  );
}
