import React from "react";
import styles from "./style";
import { Hero, Navbar } from "./components";

const App = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-hero`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
