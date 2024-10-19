/* eslint-disable react/no-unescaped-entities */
import Heading from "./Heading";
import CvButton from "./CvButton";
import style from "../assets/CSS/about.module.css";
import image from "../assets/Images/Programming-amico.png";
import Social from "./Social";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className={style.about}>
      <Heading name="About Me" description="Get to know me" />

      <div className={style.content}>
        <div data-aos="fade-right" className={style.img}>
          <img src={image} alt="" />
        </div>
        <div data-aos="fade-left" className={style.info}>
          <p className={style.title}>I create products not just art</p>
          <p className={style.description}>
            I'm a Full Stack Web Developer with a passion for creating and
            developing web applications. I am currently a student at the
            University of helwan at Egypt. I am always looking for new and
            exciting projects to work on. If you like what you see and want to
            get in touch, please don't hesitate to contact me.
          </p>
          <Social />
          <CvButton />
        </div>
      </div>
    </div>
  );
}
