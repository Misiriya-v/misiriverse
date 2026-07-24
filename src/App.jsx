import Navbar from "./components/layout/Navbar/Navbar";

import Hero from "./components/home/Hero/Hero";
import About from "./components/home/About";
import Skills from "./components/home/Skills";
import Experience from "./components/home/Experience";
import Projects from "./components/home/Projects";
import Achievements from "./components/home/Achievements";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";

import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/typography.css";
import "./styles/variables.css";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
<Footer />
      </main>
    </div>
  );
}

export default App;