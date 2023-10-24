import Image from 'next/image'

import Navbar from './components/navbar'

export default function Home() {
  return (
    <main className="bg-darkGrey h-screen">
        <header>
          <Navbar />
        </header>
    </main>
  )
}
