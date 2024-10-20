import SkillItem from "./SkillItem";
import style from "../assets/CSS/skills.module.css";
import Heading from "./Heading";
import SkillsData from "../assets/Data/skills.json";
export default function Skills() {
  return (
    <div className={style.skillSection}>
      <Heading name="My Skills" description="My technical level" />
      <div className={style.skillsContainer}>
        <div className={style.skillsList}>
          {SkillsData.map((skill) => (
            <SkillItem key={skill.skillName} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
