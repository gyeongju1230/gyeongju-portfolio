import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Skill from './pages/Skill';
import { MenuProvider } from './contexts/MenuContext';
import Contact from './pages/Contact';
import React, { Suspense } from 'react';

const projectPromise = import('./pages/Project');
const Project = React.lazy(() => projectPromise);

function App() {
  return (
    <>
      <MenuProvider>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Suspense fallback={<div>Loading...</div>}>
          <Project />
        </Suspense>
        <Contact />
      </MenuProvider>
    </>
  );
}

export default App;
