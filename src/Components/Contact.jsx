import Heading from "./Heading";
import style from "../assets/CSS/contact.module.css";
import svg from "../assets/Svgs/Mail sent-amico.svg";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const validateForm = () => {
    let errors = {};
    if (!message.name.trim()) errors.name = "Name is required";
    if (!message.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(message.email)) {
      errors.email = "Email address is invalid";
    }
    if (!message.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = (submitAction) => (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      submitAction();
    } else {
      setErrors(validationErrors);
    }
  };

  const handleGmailSubmit = () => {
    window.open(
      `mailto:eng.abdulrahman.hassan@gmail.com?subject=Message From ${message.name}&body=${message.message}`
    );
    setErrors({});
    setIsSubmitting(false);
  };

  const handleWhatsappSubmit = () => {
    window.open(
      `https://wa.me/+201220575026?text=Message From ${message.name}%0a${message.message}`
    );
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <div>
      <Heading
        name="Get In Touch"
        description="Do you have a project in your mind, contact me here"
      />

      <div className={style.contacatContent}>
        <div data-aos="fade-right" className={style.image}>
          <img src={svg} alt="Contact Illustration" />
        </div>
        <div data-aos="fade-up" className={style.form}>
          <form>
            <div className={style.inputs}>
              <div className={style.inputContainer}>
                <input
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
                {errors.name && <p className={style.error}>{errors.name}</p>}
              </div>
              <div className={style.inputContainer}>
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                />
                {errors.email && <p className={style.error}>{errors.email}</p>}
              </div>
            </div>
            <div className={style.inputContainer}>
              <textarea
                onChange={handleChange}
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
              />
              {errors.message && (
                <p className={style.error}>{errors.message}</p>
              )}
            </div>

            <div className={style.buttons}>
              <button
                onClick={handleSubmit(handleGmailSubmit)}
                className={style.gmail}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send by "}
                <SiGmail />
              </button>
              <button
                onClick={handleSubmit(handleWhatsappSubmit)}
                className={style.whats}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send by "}
                <IoLogoWhatsapp />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
