import { Amiko } from 'next/font/google';

import Navbar from './components/navbar';
import HomePage from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

const amiko = Amiko({subsets: ['latin'], weight: ['400', '600', '700']})

export default function Home() {
  return (
    <main className={amiko.className}>
      <div className="bg-darkGrey text-white">
        <Navbar />
        <HomePage />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
