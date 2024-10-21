import style from "../assets/CSS/social.module.css";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function Social() {
  return (
    <div className={style.social}>
      <Link
        className={style.linkedin}
        to="https://linkedin.com/in/abdelrahman-hassan-b09b80250"
        target="_blank"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        className={style.github}
        to="https://github.com/AbdelrahmanHassanAlii"
        target="_blank"
      >
        <FaGithub />
      </Link>
      <Link
        className={style.gmail}
        to="mailto:eng.abdulrahman.hassan@gmail.com"
        target="_blank"
      >
        <SiGmail />
      </Link>
      <Link
        className={style.whatsapp}
        to="https://wa.me/201220575026"
        target="_blank"
      >
        <IoLogoWhatsapp />
      </Link>
      <Link
        className={style.facebook}
        to="https://www.facebook.com/profile.php?id=100015463386226"
        target="_blank"
      >
        <FaFacebookF />
      </Link>
    </div>
  );
}
