import { Link, NavLink } from "react-router-dom";
import style from "../assets/CSS/header.module.css";
import CV from "../assets/pdfs/Abdelrahman.pdf";
export default function Header() {
  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.headerContent}>
          <div className={style.logo}>
            <Link to="/" className={style.name}>
              Hassan
            </Link>
          </div>
          <div className={style.links}>
            <ul className={style.list}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? style.activeLink : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? style.activeLink : ""
                  }
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
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
        </div>
      </div>
    </div>
  );
}
