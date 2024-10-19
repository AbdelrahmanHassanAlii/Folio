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
        to="https://linkedin.com"
        target="_blank"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        className={style.github}
        to="https://github.com/AbdelrahmanHassan"
        target="_blank"
      >
        <FaGithub />
      </Link>
      <Link
        className={style.gmail}
        to="mailto:your-email@gmail.com"
        target="_blank"
      >
        <SiGmail />
      </Link>
      <Link
        className={style.facebook}
        to="https://facebook.com"
        target="_blank"
      >
        <FaFacebookF />
      </Link>
      <Link
        className={style.whatsapp}
        to="https://wa.me/YourNumber"
        target="_blank"
      >
        <IoLogoWhatsapp />
      </Link>
    </div>
  );
}
