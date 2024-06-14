import React, { Suspense, useEffect, useRef, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Skill from './pages/Skill';
import { MenuProvider } from './contexts/MenuContext';
import Contact from './pages/Contact';
import Pagination from './components/pagination/Pagination';
import './App.css';
import Loading from './components/loading/Loading';

const projectPromise = import('./pages/Project');
const Project = React.lazy(() => projectPromise);

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(0);

  const sectionRefs = [homeRef, aboutRef, skillRef, projectRef, contactRef];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState('');

  const handleModalOpen = (id: string) => {
    setIsModalOpen(!isModalOpen);
    setModalId(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const pageOffsets = sectionRefs.map(ref =>
        ref.current ? ref.current.offsetTop : 0,
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const newCurrentPage = pageOffsets.findIndex(
        (offset, index) =>
          scrollPosition >= offset &&
          (index === pageOffsets.length - 1 ||
            scrollPosition < pageOffsets[index + 1]),
      );

      setCurrentPage(newCurrentPage);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRefs]);

  return (
    <>
      <MenuProvider>
        <Navbar />
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            id={modalId}
            handleModalOpen={handleModalOpen}
          />
        </div>
        <div ref={skillRef}>
          <Skill />
        </div>
        <div ref={projectRef}>
          <Suspense fallback={<Loading />}>
            <Project
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              id={modalId}
              handleModalOpen={handleModalOpen}
            />
          </Suspense>
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={sectionRefs.length}
          onPageChange={setCurrentPage}
        />
      </MenuProvider>
    </>
  );
}

export default App;
