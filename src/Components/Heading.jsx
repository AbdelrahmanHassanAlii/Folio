/* eslint-disable react/prop-types */
import style from "../assets/CSS/heading.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Heading({ name, description }) {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className={style.heading}>
      <p className={style.name}>{name}</p>
      <p className={style.description}>{description}</p>
    </div>
  );
}
