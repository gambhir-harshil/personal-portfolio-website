import { BrowserRouter } from "react-router-dom"

import {
  Hero,
  Navbar,
  StarsCanvas
} from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
          <Navbar />
        <div className="relative z-0 bg-primary">
          <Hero />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App