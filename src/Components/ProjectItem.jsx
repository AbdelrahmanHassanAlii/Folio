import { Link } from "react-router-dom";
import style from "../assets/CSS/prjectItem.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
/* eslint-disable react/prop-types */
export default function ProjectItem({ id, image, title }) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  return (
    <Link
      data-aos="zoom-in-up"
      to={`/projects/${id}`}
      className={style.projectItem}
    >
      <div className={style.imageContainer}>
        <img src={image} alt={title} />
      </div>

      <h3 className={style.title}>{title}</h3>
    </Link>
  );
}