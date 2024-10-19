/* eslint-disable react/prop-types */
import "../assets/style/skill-item.css";
import style from "../assets/CSS/skillItem.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SkillItem({ skillName, skillLevel }) {
    const percentage = parseFloat(skillLevel);
    
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className={style.skillItem}>
      <div className={style.skillNameContainer}>
        <div className={style.skillName}>{skillName}</div>
        <div className={style.level}>{skillLevel}</div>
      </div>
      <div className={style.skillLevelContainer}>
        <div
          className={style.skillLevel}
          style={{
            "--skill-width": percentage,
          }}
          role="progressbar"
          data-aos="zoom-in-right"
          data-aos-delay="100"
        ></div>
      </div>
    </div>
  );
}
