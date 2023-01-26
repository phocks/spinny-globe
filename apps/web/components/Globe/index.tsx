import { useEffect, useRef } from "react";
import { mountGlobe, unmountGlobe } from "globe-vis";

export default function Globe() {
  const inputEl = useRef(null);

  useEffect(() => {
    const container: any = inputEl.current;
    mountGlobe({ mountTo: container });

    // Clean up on unmount
    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div ref={inputEl} className="spinny-globe" />;
}
