/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import AOS from "aos";
import Typed from "typed.js";
import "aos/dist/aos.css";
import style from "../assets/CSS/landingSection.module.css";
import image from "../assets/Images/448095644_1765044390687657_7853853710402917463_n-removebg-preview-modified.png";

import Social from "./Social";

export default function LandingSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={style.landing}>
      <div data-aos="fade-left" className={style.imageContainer}>
        <svg
          className={style.svg}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1E9FAB"
            d="M44.8,-41.7C60.2,-29.4,76.3,-14.7,73.3,-3C70.3,8.7,48.2,17.4,32.8,30C17.4,42.7,8.7,59.2,-2.9,62.1C-14.4,64.9,-28.9,54.1,-34.6,41.5C-40.4,28.9,-37.5,14.4,-39.1,-1.6C-40.7,-17.6,-46.7,-35.2,-41,-47.5C-35.2,-59.7,-17.6,-66.6,-1.4,-65.2C14.7,-63.7,29.4,-53.9,44.8,-41.7Z"
            transform="translate(100 100)"
          />
        </svg>
        <img src={image} alt="Abdelrahman Hassan" className={style.image} />
      </div>
      <div data-aos="fade-right" className={style.textContainer}>
        <p className={style.name}>Abdelrahman Hassan</p>

        <div className={style.typedText}>
          I'm <span ref={typedRef}></span>
        </div>

        <p className={style.description}>
          Experienced frontend developer with a passion for creating visually
          stunning and user-friendly websites.
        </p>

        <Social />
      </div>
    </div>
  );
}
