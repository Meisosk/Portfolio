import "./App.css";
import ContactSection from "./components/ContactSection";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import HeaderSection from "./components/HeaderSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-[#161513]">
        <HeaderSection />
        <IntroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
