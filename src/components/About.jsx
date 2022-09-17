import React from "react";
import styles from "../style";
import { skills } from "../constants";
import SkillCard from "./SkillCard";
const About = () => (
  <section
    id="about"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className=" grid sm:grid-cols-3 sm:justify-start justify-center w-full skillcard-container relative">
      {skills.map((card) => (
        <SkillCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default About;
