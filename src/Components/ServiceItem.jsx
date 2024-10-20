/* eslint-disable react/prop-types */
import style from "../assets/CSS/serviceItem.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function ServiceItem({ svg, title }) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  return (
    <div data-aos="zoom-in" className={style.serviceItem}>
      {<img src={svg} alt={title} />}
      <p>{title}</p>
    </div>
  );
}
