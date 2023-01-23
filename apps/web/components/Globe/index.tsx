import { useEffect } from "react";
import { mountGlobe } from "globe-vis";

export default function Globe() {
  useEffect(() => {
    console.log("ok");
    mountGlobe({ mountTo: ".spinny-globe" });
  }, []);
  return <div className="spinny-globe" />;
}
