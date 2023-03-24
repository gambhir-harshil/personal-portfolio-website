import { BrowserRouter } from "react-router-dom"

import {
  Hero,
  Navbar,
  StarsCanvas
} from "./components"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary text-white h-screen snap-mandatory snap-y overflow-scroll z-0">
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
      </div> 
    </BrowserRouter>
  )
}

export default App