import { Link, NavLink } from "react-router-dom";
import style from "../assets/CSS/header.module.css";
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
                <a href="#about" className={style.activeLink}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className={style.activeLink}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className={style.activeLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="cvButton">
            <Link to="/cv">Download CV</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
