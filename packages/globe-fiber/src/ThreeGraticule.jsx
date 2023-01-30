import React from "react";
import { GeoJsonGeometry } from "three-geojson-geometry";
import { geoGraticule10 } from "d3-geo";

const ThreeGraticule = () => {
  console.log(GeoJsonGeometry);
  return (
    <group>
      {GeoJsonGeometry && (
        <lineSegments geometry={new GeoJsonGeometry(geoGraticule10(), 1)}>
          <lineBasicMaterial color="#3c3c3c" />
        </lineSegments>
      )}
    </group>
  );
};

export default ThreeGraticule;
