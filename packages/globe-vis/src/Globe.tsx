import { useEffect, useRef } from "react";
import { mountGlobe } from "./mountTo";

export default function Globe() {
  console.log("Globe component mounted")
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
