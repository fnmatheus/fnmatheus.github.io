import Image from 'next/image'

import Logo from './images/logo.svg'
import Bars from './components/bars'

export default function Home() {
  return (
    <main>
        <Bars />
        <header>
          <Image src={Logo} alt="logo" width={20} height={20} />
          
        </header>
    </main>
  )
}
