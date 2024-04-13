import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { useState } from "react";
import Skill from "./pages/Skill";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home isMenuOpen={isMenuOpen} />
      <About isMenuOpen={isMenuOpen} />
      {/*<Skill />*/}
    </>
  );
}

export default App;
