import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import { MenuProvider } from "./context/MenuContext";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <MenuProvider>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </MenuProvider>
    </>
  );
}

export default App;
