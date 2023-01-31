import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import ThreeMesh from "./ThreeMesh";

const ThreeScene = () => {
  return (
    <Canvas
      camera={{
        fov: 75,
        position: [0, 0, 2.0],
      }}
      style={{
        cursor: "move",
      }}
    >
      <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} />
      <ambientLight color={"white"} intensity={0x666666} />
      {/* <pointLight position={[-10, -10, -10]} intensity={5.4} /> */}
      <ThreeMesh />
    </Canvas>
  );
};

export default ThreeScene;
