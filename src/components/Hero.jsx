import React from "react";
import styles from "../style";
import { laptop } from "../assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex md:flex-row flex-col ${styles.paddingY} grid sm:grid-cols-2 gap-y-4 grid-cols-1 bg-primary`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 ${styles.paddingX} `}
      >
        <h1
          className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ${styles.flexCenter}`}
        >
          Promote Your App <br className="sm:block hidden" />
          with Softland
        </h1>
        <p
          className={`${styles.paragraph}  text-dimWhite items-start max-w-[470px]`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          accusamus quae eos labore iste suscipit laborum expedita aut
          voluptates nisi.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 relative`}>
        <img src={laptop} alt="laptop" className="w-[90%] h-[90%] relative" />
      </div>
    </section>
  );
};

export default Hero;
