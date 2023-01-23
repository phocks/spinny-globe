import { useEffect, useRef } from "react";
import { mountGlobe } from "globe-vis";

export default function Globe() {
  const inputEl = useRef(null);

  useEffect(() => {
    console.log("ok");
    mountGlobe({ mountTo: inputEl.current });
  }, []);

  return <div ref={inputEl} className="spinny-globe" />;
}
