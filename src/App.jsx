import Navbar from "#components/Navbar"
import Welcome from "#components/Welcome"
import Dock from "#components/Dock"
import Terminal from "#windows"
import Safari from "#windows/Safari";
import Finder from "#windows/Finder";
import Text from "#windows/Text";
import ImageWindow from "#windows/ImageWindow";
import Contact from "#windows/Contact"
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
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageWindow />
      <Contact />
      <Home />
    </main>
  )
}

export default App