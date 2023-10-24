import Image from 'next/image'
import { Amiko } from 'next/font/google'

import Navbar from './components/navbar'
import HomePage from './components/home'

const amiko = Amiko({subsets: ['latin'], weight: ['400', '600', '700']})

export default function Home() {
  return (
    <main className={amiko.className}>
      <div className="bg-darkGrey h-screen text-white">
        <header>
          <Navbar />
          <HomePage />
        </header>
      </div>
    </main>
  )
}
