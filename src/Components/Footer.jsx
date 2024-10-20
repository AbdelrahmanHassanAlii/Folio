import { Link } from "react-router-dom";
import style from "../assets/CSS/footer.module.css";
import Social from "./Social";

export default function Footer() {
  return (
    <div className={style.footer}>
      <p className={style.title}>Abdelrahman Hassan .</p>
      <Social />
      <p className={style.copyright}>Copyright © 2024. All rights reserved.</p>
      <p className={style.designed}>
        made with 💙 by{" "}
        <Link
          to={"https://abdelrahmanhassanalii.github.io/card/"}
          target="_blank"
          className={style.name}
        >
          Abdelrahman
        </Link>
      </p>
    </div>
  );
}
