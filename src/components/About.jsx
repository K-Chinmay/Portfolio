import React from "react";
import styles from "../style";
import { skills } from "../constants";
import SkillCard from "./SkillCard";
const About = () => (
  <section
    id="about"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div
      className={`w-full flex ${styles.flexCenter} flex-col sm:mb-16 mb-6 relative`}
    >
      <h2 className={`${styles.heading2} ${styles.flexCenter}`}>About Me</h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-center max-w-[450]`}>
          Since beginning my journey as a freelance designer over 11 years ago,
          I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </p>
      </div>
    </div>
    <div className=" grid sm:grid-cols-3 sm:justify-start justify-center w-full skillcard-container relative">
      {skills.map((card) => (
        <SkillCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default About;
