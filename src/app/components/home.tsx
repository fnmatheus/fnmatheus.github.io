import Image from 'next/image'

import Photo from '../images/foto.webp'
import { Email, GitHub, LinkedIn } from './svgs/Index'

export default function HomePage() {
  return (
    <section>
      <div className="flex flex-col h-screen justify-center items-center gap-8 px-[34px] pt-20 pb-4">
        <div className="text-5xl">
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-lightBlue to-purple">Hello! I'm</h1>
          <h1 className="font-semibold">Matheus</h1>
        </div>
        <p className="w-full text-center">
          Venha solucionar seus problemas com SITES, LANDING PAGES e muito mais!
        </p>
        <div className="flex flex-col gap-5 w-full">
          <button className="bg-gradient-to-l from-lightBlue to-purple w-full h-[45px] rounded-full text-xl">
            saiba mais!
          </button>
          <button className="bg-gradient-to-l from-lightBlue to-purple w-full h-[45px] rounded-full flex justify-center items-center px-[2px]">
            <div className="w-full h-[41px] rounded-full bg-darkGrey flex justify-center items-center text-xl">
              contate-me
            </div>
          </button>
        </div>
        <div className="rounded-full w-[218px] h-[218px] bg-gradient-to-br from-lightBlue to-purple flex justify-center items-center">
          <Image src={Photo} alt="photo" className="rounded-full w-[214px] h-[214px]" />
        </div>
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
      </div>
    </section>
  )
}
