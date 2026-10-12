import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EngineeringScene } from './EngineeringScene';

export function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {/* Subtle Ambient Engineering Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 5]} intensity={0.8} color="#00f0ff" />
          <pointLight position={[-8, -5, -4]} intensity={1.0} color="#3b82f6" />
          <pointLight position={[8, 5, 2]} intensity={0.8} color="#06b6d4" />

          {/* Clean Casual Engineering 3D Scene */}
          <EngineeringScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
