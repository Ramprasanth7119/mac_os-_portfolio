import Navbar from "#components/Navbar"
import Welcome from "#components/Welcome"
import Dock from "#components/Dock"

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Dock />
    </main>
  )
}

export default App