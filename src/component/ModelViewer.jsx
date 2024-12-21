import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import d from "/assets/images/f.png";
const ThreeDImage = () => {
  const texture = useTexture(d); // Load the PNG image as a texture

  return (
    <mesh>
      {/* Create a flat plane to apply the texture */}
      <planeGeometry args={[3, 3]} /> {/* Adjust size as needed */}
      <meshStandardMaterial map={texture} transparent={true} /> {/* Apply texture to the plane */}
    </mesh>
  );
};

const ModelViewer = () => {
  return (
    <Canvas style={{ height: "50vh", width: "50%" }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <ThreeDImage />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
