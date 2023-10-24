import Image from 'next/image'

import Photo from '../images/foto.webp'
import { Email, GitHub, LinkedIn } from './svgs/Index'

export default function HomePage() {
  return (
    <section className="pt-16">
      <div>
        <h1>Hello! I'm</h1>
        <h1>Matheus</h1>
      </div>
      <p>
        Venha solucionar seus problemas com SITES, LANDING PAGES e muito mais!
      </p>
      <div>
        <button>saiba mais!</button>
        <button>contate-me</button>
      </div>
      <Image src={Photo} alt="photo" />
      <div className="flex w-full justify-center items-center gap-[52px]">
        <a href="https://github.com/fnmatheus" target="_blank">
          <GitHub className="text-[50px]" />
        </a>
        <a href="mailto:nasc.matheusfrancisco@gmail.com" target="_blank">
          <Email className="text-[50px]" />
        </a>
        <a href="https://www.linkedin.com/in/fnmatheus/" target="_blank">
          <LinkedIn className="text-[50px]" />
        </a>
      </div>
    </section>
  )
}
