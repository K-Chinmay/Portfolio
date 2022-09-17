import styles from "../style";

const SkillCard = ({ role, desc, tech, image }) => (
  <div
    className={`flex ${styles.flexCenter} flex-col px-10 py-12 rounded-20px max-w-[370px] md:mr-10  sm:mr-5 mr-0 my-5 skillcard border-solid border border-stone-300`}
  >
    <img src={image} alt="image" className="w-[90px] h-[90px] rounded-lg" />
    <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">
      {role}
    </h4>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] my-10">
      {desc}
    </p>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-[#2686f0] my-10">
      Technologies I use
    </p>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] my-10">
      {tech}
    </p>
  </div>
);

export default SkillCard;
