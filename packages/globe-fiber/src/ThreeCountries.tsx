import React from "react";
import { GeoJsonGeometry } from "three-geojson-geometry";

import geoJson from "./data/ne_110m_admin_0_countries.json";

const ThreeCountries = () => {
  return (
    <group>
      {geoJson.features.map((data: any, index) => {
        const { geometry } = data;
        return (
          <lineSegments key={index} geometry={new GeoJsonGeometry(geometry, 1)}>
            <lineBasicMaterial color="#577f93" />
          </lineSegments>
        );
      })}
    </group>
  );
};

export default ThreeCountries;
