"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function MeshComponent() {
  const fileUrl = "/well.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh>
      <primitive
        ref={mesh}
        object={gltf.scene}
        scale={0.07}
        position={[0, 0, 0]}
      />
    </mesh>
  );
}

export function Shiba() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex justify-center items-center flex-1">
        <Suspense fallback={null}>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <MeshComponent />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}
