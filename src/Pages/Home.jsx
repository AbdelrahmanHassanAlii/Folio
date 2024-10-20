import About from "../Components/About";
import LandingSection from "../Components/LandingSection";
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
      </div>
    </div>
  );
}
