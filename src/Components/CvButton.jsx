import { Link } from "react-router-dom";
import style from "../assets/CSS/cvButton.module.css";
import CV from "../assets/pdfs/Abdelrahman.pdf";

export default function CvButton() {
  return (
    <div className={style.cvButton}>
      <Link
        to={CV}
        target="_blank"
        rel="noreferrer"
        download="Abdelrahman Hassan CV.pdf"
      >
        Download CV
      </Link>
    </div>
  );
}
