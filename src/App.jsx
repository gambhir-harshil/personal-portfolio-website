import { BrowserRouter } from "react-router-dom"

import {
  Hero,
  Navbar,
  StarsCanvas
} from "./components"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import StyledSocialBar from "./components/StyledSocialBar"
import StyledEmailBar from "./components/StyledEmailBar"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-primary text-white h-screen snap-mandatory snap-y overflow-scroll z-0">
        <Navbar />
        <section className="relative z-0 snap-start">
          <Hero />
          <StarsCanvas />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="skills" className="snap-center">
          <Skills />
        </section>
        <section id="projects" className="snap-center">
          <Projects />
        </section>
        <section id="contact" className="snap-center">
          <Contact />
        </section>
        <StyledSocialBar />
        <StyledEmailBar />
      </div> 
    </BrowserRouter>
  )
}

export default App