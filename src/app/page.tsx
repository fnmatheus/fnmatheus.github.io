"use client"
import Navbar from './components/navbar';
import WebNavbar from './components/webNavbar'
import Openning from './components/openning';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const navegationRef = useRef<HTMLInputElement[] | []>([]);
  const [width, setWidth] = useState(window.innerWidth);

  const addToRefs = (e: never) => {
    if (e && !navegationRef.current.includes(e)) {
      navegationRef.current.push(e);
    }
  };

  const handleLink = (id: string) => {
    const currentRef = navegationRef.current.filter((page: { id: string }) => page.id === id)[0];
    currentRef.scrollIntoView({ block: "center", behavior: 'smooth' });
  }
  

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <main>
      <div className="bg-darkGrey text-white">
        {
          width < 1024 ? (
            <Navbar ref={ navegationRef } handleLink={ handleLink } />
          ) : (
            <WebNavbar ref={ navegationRef } handleLink={ handleLink } />
          )
        }
        <Openning ref={ navegationRef } handleLink={ handleLink } />
        <About addToRefs={ addToRefs } ref={ navegationRef } />
        <Projects addToRefs={ addToRefs } ref={ navegationRef } />
        <Contact addToRefs={ addToRefs } ref={ navegationRef } />
        <Footer />
      </div>
    </main>
  )
}
