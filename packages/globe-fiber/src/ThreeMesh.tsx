import React, { useState, useEffect } from "react";

import ThreeGraticule from "./ThreeGraticule";
import ThreeCountries from "./ThreeCountries";

const ThreeMesh = () => {
  return (
    <mesh>
      {/* <boxGeometry /> */}
      <sphereGeometry args={[1, 32]}></sphereGeometry>
      <meshPhongMaterial color="#ffffff" transparent={false} opacity={0.9} />
      <ThreeGraticule />
      <ThreeCountries />
    </mesh>
  );
};

export default ThreeMesh;
