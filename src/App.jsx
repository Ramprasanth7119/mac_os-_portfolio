import Navbar from "#components/Navbar"
import Welcome from "#components/Welcome"
import Dock from "#components/Dock"
import Terminal from "#windows"
import Finder from "#windows/Finder";
import Text from "#windows/Text";
import Contact from "#windows/Contact"
import Trash from "#windows/Trash";
import SystemMonitor from "#windows/SystemMonitor";
import Home from "#components/Home";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable"
import Resume from "#windows/Resume";
gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Dock />
      <Terminal/>
      <Resume />
      <Finder />
      <SystemMonitor />
      <Trash />
      <Text />
      <Contact />
      <Home />
    </main>
  )
}

export default App