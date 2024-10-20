import About from "../Components/About";
import LandingSection from "../Components/LandingSection";
import Skills from "../Components/Skills";

export default function Home() {
  return (
    <div>
      <div className="container">
        <LandingSection />
        <About />
        <Skills />
      </div>
    </div>
  );
}
