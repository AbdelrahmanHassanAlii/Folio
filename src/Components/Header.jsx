import { Link, NavLink } from "react-router-dom";
import style from "../assets/CSS/header.module.css";
import CvButton from "./CvButton";
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

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
            <CvButton />
          </div>

          {/* <FaBars onClick={toggleMenu} className={style.bars} /> */}

          {isMenuOpen ? (
            <FaBarsStaggered onClick={toggleMenu} className={style.bars} />
          ) : (
            <FaBars onClick={toggleMenu} className={style.bars} />
          )}

          <div
            className={style.menu + (isMenuOpen ? " " + style.activemenue : "")}
          >
            <div className="links">
              <ul className="list">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? style.activeLink : ""
                    }
                    onClick={toggleMenu}
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
                    onClick={toggleMenu}
                  >
                    Projects
                  </NavLink>
                </li>

                <CvButton />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaBars } from "react-icons/fa"; // Import the Bars icon
// import style from "../assets/CSS/header.module.css";
// import CvButton from "./CvButton";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className={style.header}>
//       <div className="container">
//         <div className={style.headerContent}>
//           <div className={style.logo}>
//             <Link to="/" className={style.name}>
//               Hassan
//             </Link>
//           </div>

//           <div className={style.bars} onClick={toggleMenu}>
//             <FaBars />
//           </div>

//           <div
//             className={`${style.menu} ${isMenuOpen ? style.activeMenu : ""}`}
//           >
//             <div className={style.links}>
//               <ul className={style.list}>
//                 <li>
//                   <NavLink
//                     to="/"
//                     className={({ isActive }) =>
//                       isActive ? style.activeLink : ""
//                     }
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/projects"
//                     className={({ isActive }) =>
//                       isActive ? style.activeLink : ""
//                     }
//                   >
//                     Projects
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//             <CvButton />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
