/* eslint-disable react/prop-types */
import style from "../assets/CSS/skillItem.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SkillItem({ skillName, skillLevel }) {
  const percentage = parseFloat(skillLevel);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    return (
      <div data-aos="zoom-in" className={style.skillItem}>
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
          ></div>
        </div>
      </div>
    );
}
