import style from "../assets/CSS/services.module.css";
import ServiceItem from "./ServiceItem";
import uiSvg from "../assets/Svgs/ui-ux.svg";
import appDevSvg from "../assets/Svgs/app-development.svg";
import webDesign from "../assets/Svgs/web-design.svg";
import fullStack from "../assets/Svgs/full-stack.svg";
import Heading from "./Heading";

export default function Services() {
  return (
    <div className={style.servicesSection}>
      <Heading name="My Services" description="What i provide" />
      <div className={style.services}>
        <ServiceItem svg={webDesign} title="Web Design" />
        <ServiceItem svg={fullStack} title="Full Stack Development" />
        <ServiceItem svg={uiSvg} title="UI/UX Design" />
        <ServiceItem svg={appDevSvg} title="App Development" />
      </div>
    </div>
  );
}
