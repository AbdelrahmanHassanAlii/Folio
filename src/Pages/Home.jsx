import About from "../Components/About";
import Contact from "../Components/Contact";
import LandingSection from "../Components/LandingSection";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import Skills from "../Components/Skills";

export default function Home() {
  return (
    <div>
      <div className="container">
        <LandingSection />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
