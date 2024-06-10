import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Skill from './pages/Skill';
import { MenuProvider } from './contexts/MenuContext';
import Contact from './pages/Contact';
import { lazy } from 'react';

const Project = lazy(() => import('./pages/Project'));

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
