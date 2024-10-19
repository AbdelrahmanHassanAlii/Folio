import About from "../Components/About";
import LandingSection from "../Components/LandingSection";

export default function Home() {
  return (
    <div>
      <div className="container">
        <LandingSection />
        <About />
      </div>
    </div>
  );
}
