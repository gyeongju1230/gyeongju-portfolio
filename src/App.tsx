import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
    <>
      <MenuProvider>
        <Navbar />
        <Home />
        <About />
        <Skill />
      </MenuProvider>
    </>
  );
}

export default App;
