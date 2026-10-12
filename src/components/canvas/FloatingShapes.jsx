import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingShapes({ interactive = true }) {
  const groupRef = useRef();
  const coreRef = useRef();
  const wireframeRef = useRef();
  const ringRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    // Gentle mouse follow tilt
    if (groupRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 8;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    }

    // Individual component rotations
    const speed = hovered ? 2.5 : 1.0;
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.4 * speed;
      coreRef.current.rotation.y += delta * 0.6 * speed;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.2 * speed;
      wireframeRef.current.rotation.z += delta * 0.3 * speed;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.3 * speed;
      ringRef.current.rotation.y += delta * 0.15 * speed;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        {/* Central Core */}
        <mesh
          ref={coreRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.15 : 1}
        >
          <octahedronGeometry args={[1.6, 0]} />
          <MeshDistortMaterial
            color={hovered ? "#ff007f" : "#00f0ff"}
            emissive={hovered ? "#7f003f" : "#003b46"}
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.9}
            distort={0.25}
            speed={3}
          />
        </mesh>

        {/* Outer Wireframe Cage */}
        <mesh ref={wireframeRef} scale={2.4}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#581c87"
            emissiveIntensity={0.8}
            wireframe
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Orbiting Neon Ring */}
        <mesh ref={ringRef} scale={3.2}>
          <torusGeometry args={[1, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={1}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Second Angled Ring */}
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]} scale={3.6}>
          <torusGeometry args={[1, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#be185d"
            emissiveIntensity={0.8}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>

        {/* Floating Satellite Polyhedrons */}
        <mesh position={[3.5, 1.8, -1]} scale={0.4}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#06b6d4" roughness={0.1} metalness={0.9} />
        </mesh>

        <mesh position={[-3.2, -1.5, 0.5]} scale={0.35}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#a855f7" roughness={0.2} metalness={0.8} />
        </mesh>

        <mesh position={[2.8, -2, 1]} scale={0.3}>
          <tetrahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#f43f5e" roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>

      {/* Cyber Grid Floor */}
      <group position={[0, -4.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <gridHelper args={[40, 40, '#00f0ff', '#1e293b']} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  );
}
