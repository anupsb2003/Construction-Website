
import Hero from "../components/Hero/Hero";
import About from "./About/About";
import Contact from "./Contact/Contact";
import "./Home.css";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Projects />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
