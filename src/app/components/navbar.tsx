"use client"
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Logo } from './svgs/Index';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <section className="w-screen border-b border-lightGrey fixed z-40">
      <div className="flex justify-between items-center h-[60px] w-screen pl-5 pr-[10px]">
        {/* <Image src={Logo} alt="logo" width={26} height={28.82} /> */}
        <Logo className="text-[35px]" />
        <Hamburger toggled={isOpen} toggle={setOpen} rounded size={22} />
      </div>
      {
        isOpen &&
        <div className="w-screen h-[163px] flex flex-col items-center justify-center gap-5 font-semibold bg-darkGrey">
          <button>Sobre mim</button>
          <button>Projetos</button>
          <button>Contate-me</button>
        </div>
      }
    </section>
  )
}
