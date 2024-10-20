import Heading from "./Heading";
import style from "../assets/CSS/contact.module.css";
import svg from "../assets/Svgs/Mail sent-amico.svg";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <Heading
        name="Get In Touch"
        description="Do you have a project in your mind, contact me here"
      />

      <div className={style.contacatContent}>
        <div data-aos="fade-right" className={style.image}>
          <img src={svg} alt="" />
        </div>
        <div data-aos="fade-up" className={style.form}>
          <form>
            <div className={style.inputs}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>

            {/* <div className="div"> */}
            <textarea placeholder="Your Message"></textarea>
            {/* </div> */}

            <div className={style.buttons}>
              <button className={style.gmail} type="submit">
                Send by <SiGmail />
              </button>
              <button className={style.whats} type="submit">
                Send by <IoLogoWhatsapp />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
