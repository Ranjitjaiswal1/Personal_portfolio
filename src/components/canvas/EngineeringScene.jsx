import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Subtle floating engineering cube/module
function TechNode({ position, size = 0.8, color = "#00f0ff", wireframe = true }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <group position={position}>
        {/* Core tech cube */}
        <mesh ref={meshRef}>
          <boxGeometry args={[size, size, size]} />
          <meshStandardMaterial
            color={color}
            wireframe={wireframe}
            transparent
            opacity={0.45}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Inner solid subtle core */}
        <mesh scale={0.4}>
          <boxGeometry args={[size, size, size]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

// Clean engineering particle grid
function TechGridParticles({ count = 600 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyan = new THREE.Color("#00f0ff");
    const blue = new THREE.Color("#3b82f6");
    const slate = new THREE.Color("#64748b");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Distributed casually in 3D space
      pos[i3] = (Math.random() - 0.5) * 30;
      pos[i3 + 1] = (Math.random() - 0.5) * 20;
      pos[i3 + 2] = (Math.random() - 0.5) * 15 - 3;

      const mixed = Math.random() > 0.6 ? cyan : Math.random() > 0.3 ? blue : slate;
      col[i3] = mixed.r;
      col[i3 + 1] = mixed.g;
      col[i3 + 2] = mixed.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        transparent={true}
        opacity={0.65}
      />
    </points>
  );
}

// Casual Engineering Grid Plane
function EngineeringBlueprint() {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      // Subtle float wave
      gridRef.current.position.y = -4 + Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <group ref={gridRef} position={[0, -4, -2]} rotation={[-Math.PI / 2.3, 0, 0]}>
      <gridHelper args={[40, 40, '#00f0ff', '#1e293b']} />
    </group>
  );
}

export function EngineeringScene() {
  const containerRef = useRef();

  useFrame((state) => {
    // Gentle casual mouse parallax
    if (containerRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 16;
      const targetY = (state.pointer.y * Math.PI) / 20;
      containerRef.current.rotation.y = THREE.MathUtils.lerp(containerRef.current.rotation.y, targetX, 0.03);
      containerRef.current.rotation.x = THREE.MathUtils.lerp(containerRef.current.rotation.x, -targetY, 0.03);
    }
  });

  return (
    <group ref={containerRef}>
      {/* Blueprint Grid Floor */}
      <EngineeringBlueprint />

      {/* Subtle Tech Ambient Particles */}
      <TechGridParticles count={250} />

      {/* Floating Casual Engineering Geometric Nodes - Nicely framed on sides */}
      <TechNode position={[-5.5, 2, -3]} size={1.0} color="#00f0ff" />
      <TechNode position={[5.5, -1.5, -3]} size={1.2} color="#3b82f6" />
      <TechNode position={[-5, -3, -4]} size={0.8} color="#06b6d4" />
      <TechNode position={[5, 3.2, -4]} size={0.7} color="#00f0ff" />
    </group>
  );
}
