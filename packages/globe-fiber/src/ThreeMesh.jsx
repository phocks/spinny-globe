import React, { useState, useEffect } from "react";

import ThreeGraticule from "./ThreeGraticule";
import ThreeCountries from "./ThreeCountries";

const ThreeMesh = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32]} />
      <meshPhongMaterial color="#ffffff" transparent={false} opacity={0.99} />
      <ThreeGraticule />
      <ThreeCountries />
    </mesh>
  );
};

export default ThreeMesh;
