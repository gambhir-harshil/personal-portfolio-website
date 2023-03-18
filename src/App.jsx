import { BrowserRouter } from "react-router-dom"

import {
  Hero,
  Navbar,
  StarsCanvas
} from "./components"
import About from "./components/About"

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="relative z-0 bg-primary">
          <Hero />
          <StarsCanvas />
        </div>
        <About />
    </BrowserRouter>
  )
}

export default App