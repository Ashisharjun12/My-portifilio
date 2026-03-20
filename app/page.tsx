import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillsMarquee from "./components/SkillsMarquee";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Footer />
    </main>
  );
}