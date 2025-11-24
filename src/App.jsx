import Navbar from "#components/Navbar"
import Welcome from "#components/Welcome"
import Dock from "#components/Dock"
import Terminal from "#windows"

import gsap from "gsap";
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Dock />
      <Terminal/>
    </main>
  )
}

export default App