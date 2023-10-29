"use client"
import Navbar from './components/navbar';
import Openning from './components/openning';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import { useRef } from 'react';

export default function Home() {
  const navegationRef = useRef<HTMLInputElement[] | []>([]);

  const addToRefs = (e: never) => {
    if (e && !navegationRef.current.includes(e)) {
      navegationRef.current.push(e);
    }
  };

  return (
    <main>
      <div className="bg-darkGrey text-white">
        <Navbar ref={ navegationRef } />
        <Openning ref={ navegationRef } />
        <About addToRefs={ addToRefs } ref={ navegationRef } />
        <Projects addToRefs={ addToRefs } ref={ navegationRef } />
        <Contact addToRefs={ addToRefs } ref={ navegationRef } />
        <Footer />
      </div>
    </main>
  )
}
