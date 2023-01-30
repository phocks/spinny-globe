import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";
console.log(styles);

import { ThreeScene } from "globe-fiber";

function App() {
  return (
    <div className={styles.root}>
      <ThreeScene />
    </div>
  );
}

export default App;
