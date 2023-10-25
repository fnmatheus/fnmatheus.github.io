"use client"
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Logo } from './svgs/Index';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className="w-screen border-b border-lightGrey fixed z-40 bg-darkGrey">
      <div className="flex justify-between items-center h-[60px] w-screen pl-5 pr-[10px]">
        <Logo className="text-[35px]" />
        <Hamburger toggled={isOpen} toggle={setOpen} rounded size={22} />
      </div>
      {
        isOpen &&
        <div className="w-screen h-[163px] flex flex-col items-center justify-center gap-5 font-semibold">
          <button>Sobre mim</button>
          <button>Projetos</button>
          <button>Contate-me</button>
        </div>
      }
    </header>
  )
}
