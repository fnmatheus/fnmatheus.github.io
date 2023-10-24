import Image from 'next/image'
import { Amiko } from 'next/font/google'

import Navbar from './components/navbar'

const amiko = Amiko({subsets: ['latin'], weight: ['400', '600', '700']})

export default function Home() {
  return (
    <main className={amiko.className}>
      <div className="bg-darkGrey h-screen">
        <header>
          <Navbar />
        </header>
      </div>
    </main>
  )
}
