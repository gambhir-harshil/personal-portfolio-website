import { BrowserRouter } from "react-router-dom"

import {
  Hero,
  Navbar,
  StarsCanvas
} from "./components"
import About from "./components/About"
import Skills from "./components/Skills"

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary text-white h-screen overflow-scroll z-0">
        <Navbar />
        <section className="relative z-0">
          <Hero />
          <StarsCanvas />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </div> 
    </BrowserRouter>
  )
}

export default App