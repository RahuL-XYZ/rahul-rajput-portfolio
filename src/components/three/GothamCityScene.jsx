import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Generate procedural Gotham skyscraper window texture (Gothic amber & ice blue)
function createGothamWindowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Dark gothic granite facade
  ctx.fillStyle = '#06080d';
  ctx.fillRect(0, 0, 256, 512);

  // Gothic vertical stone pillars
  ctx.fillStyle = '#0a0d14';
  for (let c = 0; c < 8; c++) {
    ctx.fillRect(c * 32, 0, 4, 512);
  }

  // Windows in vertical gothic columns
  const cols = 8;
  const rows = 32;
  const w = 18;
  const h = 8;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isLit = Math.random() > 0.45;
      const x = 6 + c * 32;
      const y = 8 + r * 15;

      if (isLit) {
        const rand = Math.random();
        if (rand < 0.65) {
          ctx.fillStyle = '#f5c542'; // Detective amber / warm yellow
        } else if (rand < 0.88) {
          ctx.fillStyle = '#3c78b5'; // Gotham ice blue
        } else {
          ctx.fillStyle = '#e8edf2'; // Cold fluorescent white
        }
        ctx.fillRect(x, y, w, h);
      } else {
        ctx.fillStyle = '#0c1017'; // Dark tinted bulletproof glass
        ctx.fillRect(x, y, w, h);
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// Procedural 3D Bat-Signal Texture
function createBatSignalTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Glowing searchlight lens
  const grad = ctx.createRadialGradient(256, 256, 40, 256, 256, 240);
  grad.addColorStop(0, 'rgba(255, 230, 140, 0.95)');
  grad.addColorStop(0.65, 'rgba(245, 197, 66, 0.65)');
  grad.addColorStop(0.85, 'rgba(245, 197, 66, 0.2)');
  grad.addColorStop(1, 'rgba(245, 197, 66, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // Original Bat Wing Silhouette
  ctx.save();
  ctx.translate(256, 256);
  ctx.fillStyle = '#050608';
  ctx.beginPath();
  // Stylized bat silhouette (smooth bezier curves)
  ctx.moveTo(0, -65);
  // Head ears
  ctx.lineTo(14, -100);
  ctx.lineTo(24, -65);
  // Right wing top
  ctx.bezierCurveTo(70, -75, 130, -50, 190, 10);
  // Right wing scalloped edge
  ctx.bezierCurveTo(155, 30, 125, 60, 95, 35);
  ctx.bezierCurveTo(70, 70, 45, 75, 25, 45);
  ctx.bezierCurveTo(15, 65, 8, 80, 0, 90);
  // Left wing symmetry
  ctx.bezierCurveTo(-8, 80, -15, 65, -25, 45);
  ctx.bezierCurveTo(-45, 75, -70, 70, -95, 35);
  ctx.bezierCurveTo(-125, 60, -155, 30, -190, 10);
  // Left wing top
  ctx.bezierCurveTo(-130, -50, -70, -75, -24, -65);
  ctx.lineTo(-14, -100);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export default function GothamCityScene({ mouse }) {
  const groupRef = useRef();
  const batSignalRef = useRef();
  const searchlightBeamRef = useRef();
  const rainPointsRef = useRef();
  const lightningLightRef = useRef();
  const characterRef = useRef();

  const windowTexture = useMemo(() => createGothamWindowTexture(), []);
  const batSignalTexture = useMemo(() => createBatSignalTexture(), []);

  // Gotham Skyscraper grid with gothic heights
  const buildings = useMemo(() => {
    const list = [];
    const gridX = 7;
    const gridZ = 7;
    const spacingX = 4.2;
    const spacingZ = 4.2;

    for (let i = -gridX; i <= gridX; i++) {
      for (let j = -gridZ; j <= gridZ; j++) {
        if (i === 0 || j === 0) continue; // Wide Gotham avenues
        if (Math.random() < 0.12) continue;

        const x = i * spacingX + (Math.random() - 0.5) * 0.7;
        const z = j * spacingZ + (Math.random() - 0.5) * 0.7 - 6;

        const distFromCenter = Math.sqrt(x * x + z * z);
        const height = Math.max(7, 28 - distFromCenter * 0.5 + Math.random() * 9);
        const width = 2.4 + Math.random() * 1.3;
        const depth = 2.4 + Math.random() * 1.3;

        const isWayneTower = i === 1 && j === -2;
        const hasSpire = height > 16 || isWayneTower;
        const hasGoldTrim = Math.random() > 0.45 || isWayneTower;

        list.push({
          x,
          z,
          height: isWayneTower ? 34 : height,
          width: isWayneTower ? 3.8 : width,
          depth: isWayneTower ? 3.8 : depth,
          isWayneTower,
          hasSpire,
          hasGoldTrim
        });
      }
    }
    return list;
  }, []);

  // 3D Rain Particles
  const rainGeo = useMemo(() => {
    const count = 750;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = Math.random() * 35;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 45 - 6;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Subtle camera tilt following cursor
    if (groupRef.current) {
      const targetRotY = (mouse?.normalizedX || 0) * 0.07;
      const targetRotX = (mouse?.normalizedY || 0) * 0.035;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    }

    // Bat-Signal sweep across cloud layer
    if (batSignalRef.current) {
      const sweepX = Math.sin(t * 0.45) * 7 + 4;
      const sweepZ = Math.cos(t * 0.35) * 4 - 14;
      batSignalRef.current.position.x = sweepX;
      batSignalRef.current.position.z = sweepZ;
    }

    // Volumetric searchlight beam follows bat signal
    if (searchlightBeamRef.current && batSignalRef.current) {
      searchlightBeamRef.current.lookAt(
        batSignalRef.current.position.x,
        batSignalRef.current.position.y,
        batSignalRef.current.position.z
      );
    }

    // 3D Rain fall animation
    if (rainPointsRef.current) {
      const positions = rainPointsRef.current.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.7; // fall velocity
        positions[i - 1] -= 0.08; // wind slant
        if (positions[i] < 0) {
          positions[i] = 32;
        }
      }
      rainPointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Distant lightning flash
    if (lightningLightRef.current) {
      if (Math.sin(t * 1.5) > 0.985 && Math.random() > 0.5) {
        lightningLightRef.current.intensity = 3.5;
      } else {
        lightningLightRef.current.intensity = THREE.MathUtils.lerp(lightningLightRef.current.intensity, 0.2, 0.15);
      }
    }

    // Dark Knight Character idle cape sway & subtle breathe
    if (characterRef.current) {
      characterRef.current.position.y = Math.sin(t * 1.8) * 0.04;
      characterRef.current.rotation.y = (mouse?.normalizedX || 0) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2 - 0.08}
        minPolarAngle={Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
        rotateSpeed={0.4}
      />

      {/* Atmospheric Fog - Midnight Gotham Charcoal */}
      <fog attach="fog" args={['#05070c', 16, 52]} />

      {/* Lightning Strobe Ambient */}
      <ambientLight ref={lightningLightRef} color="#b0d0ff" intensity={0.25} />
      <directionalLight position={[10, 25, 10]} intensity={0.6} color="#4a7bb0" />
      <directionalLight position={[-15, 20, -10]} intensity={0.4} color="#f5c542" />

      {/* Ground Wet Asphalt */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, -6]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#05070b" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Tactical Avenue Grid Lines */}
      <gridHelper 
        args={[80, 24, '#F5C542', '#252B33']} 
        position={[0, 0, -6]} 
      />

      {/* Bat-Signal Projection on Cloud Ceiling */}
      <mesh 
        ref={batSignalRef} 
        position={[4, 27, -14]} 
        rotation={[Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[9, 9]} />
        <meshBasicMaterial 
          map={batSignalTexture} 
          transparent 
          opacity={0.88} 
          side={THREE.DoubleSide} 
          depthWrite={false}
        />
      </mesh>

      {/* Volumetric Searchlight Beam Source from GCPD Rooftop */}
      <group position={[-6, 12, -4]}>
        {/* Searchlight Housing */}
        <mesh castShadow>
          <cylinderGeometry args={[0.5, 0.7, 1.2, 16]} />
          <meshStandardMaterial color="#1a202c" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Glowing Beam Cone */}
        <mesh ref={searchlightBeamRef} position={[0, 0.6, 0]}>
          <coneGeometry args={[4.5, 26, 32, 1, true]} />
          <meshBasicMaterial 
            color="#ffeaa7" 
            transparent 
            opacity={0.16} 
            side={THREE.DoubleSide} 
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* 3D Falling Rain Points */}
      <points ref={rainPointsRef} geometry={rainGeo}>
        <pointsMaterial 
          size={0.14} 
          color="#90b8e6" 
          transparent 
          opacity={0.5} 
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Gotham Skyscrapers */}
      {buildings.map((b, i) => (
        <group key={i} position={[b.x, b.height / 2, b.z]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[b.width, b.height, b.depth]} />
            <meshStandardMaterial 
              color="#ffffff"
              map={windowTexture}
              roughness={0.5} 
              metalness={0.4}
            />
          </mesh>

          {/* Golden Rooftop Crest / Wayne Tower Beacon */}
          {b.hasGoldTrim && (
            <mesh position={[0, b.height / 2 + 0.08, 0]}>
              <boxGeometry args={[b.width + 0.12, 0.2, b.depth + 0.12]} />
              <meshBasicMaterial color={b.isWayneTower ? '#F5C542' : '#B88E14'} />
            </mesh>
          )}

          {/* Gothic Spire with Aviation Warning Light */}
          {b.hasSpire && (
            <group position={[0, b.height / 2 + 1.8, 0]}>
              <mesh>
                <coneGeometry args={[0.22, 3.6, 8]} />
                <meshStandardMaterial color="#11151b" metalness={0.8} roughness={0.2} />
              </mesh>
              {/* Pulsing red warning beacon */}
              <mesh position={[0, 1.85, 0]}>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshBasicMaterial color="#FF2222" />
              </mesh>
            </group>
          )}

          {/* WayneTech Monogram Signboard */}
          {b.isWayneTower && (
            <group position={[0, b.height / 2 - 2, b.depth / 2 + 0.05]}>
              <mesh>
                <planeGeometry args={[2.4, 0.9]} />
                <meshBasicMaterial color="#0A0E17" />
              </mesh>
              <mesh position={[0, 0, 0.02]}>
                <planeGeometry args={[2.1, 0.6]} />
                <meshBasicMaterial color="#F5C542" />
              </mesh>
            </group>
          )}
        </group>
      ))}

      {/* Foreground Gargoyle Observation Ledge & Dark Knight Tactical Avatar */}
      <group position={[0, 2.8, 4.2]} ref={characterRef}>
        {/* Gargoyle Stone Perch */}
        <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 0.6, 2.2]} />
          <meshStandardMaterial color="#151b24" roughness={0.9} metalness={0.2} />
        </mesh>
        <mesh position={[0, -0.4, 1.0]} castShadow>
          <coneGeometry args={[0.4, 0.8, 4]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#11151b" roughness={0.8} metalness={0.3} />
        </mesh>

        {/* Tactical Dark Knight Avatar Model (Silhouette & Utility Belt) */}
        <group position={[0, 0.35, 0.4]}>
          {/* Torso & Armored Chestplate */}
          <mesh castShadow>
            <boxGeometry args={[0.85, 1.0, 0.5]} />
            <meshStandardMaterial color="#080a0e" roughness={0.3} metalness={0.8} />
          </mesh>

          {/* Tactical Cowl / Mask with Pointed Ears */}
          <group position={[0, 0.82, 0]}>
            <mesh castShadow>
              <sphereGeometry args={[0.32, 16, 16]} />
              <meshStandardMaterial color="#050608" roughness={0.2} metalness={0.9} />
            </mesh>
            {/* Left Ear */}
            <mesh position={[-0.18, 0.34, -0.05]} rotation={[0, 0, 0.15]}>
              <coneGeometry args={[0.07, 0.45, 4]} />
              <meshStandardMaterial color="#050608" roughness={0.2} metalness={0.9} />
            </mesh>
            {/* Right Ear */}
            <mesh position={[0.18, 0.34, -0.05]} rotation={[0, 0, -0.15]}>
              <coneGeometry args={[0.07, 0.45, 4]} />
              <meshStandardMaterial color="#050608" roughness={0.2} metalness={0.9} />
            </mesh>
            {/* Illuminated Tactical White Detective Eyes */}
            <mesh position={[-0.1, 0.05, 0.28]}>
              <boxGeometry args={[0.09, 0.03, 0.02]} />
              <meshBasicMaterial color="#E8EDF2" />
            </mesh>
            <mesh position={[0.1, 0.05, 0.28]}>
              <boxGeometry args={[0.09, 0.03, 0.02]} />
              <meshBasicMaterial color="#E8EDF2" />
            </mesh>
          </group>

          {/* Yellow Tactical Utility Belt */}
          <mesh position={[0, -0.45, 0.02]}>
            <boxGeometry args={[0.88, 0.14, 0.54]} />
            <meshStandardMaterial color="#F5C542" roughness={0.3} metalness={0.9} />
          </mesh>

          {/* Flowing Dark Cape */}
          <mesh position={[0, -0.4, -0.32]} rotation={[0.15, 0, 0]}>
            <boxGeometry args={[1.1, 1.7, 0.06]} />
            <meshStandardMaterial color="#050608" roughness={0.9} metalness={0.1} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

