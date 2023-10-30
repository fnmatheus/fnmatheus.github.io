"use client"
import { Squash as Hamburger } from 'hamburger-react';
import React, {useState } from 'react';
import { Logo } from './svgs/Index';

function WebNavbar({ handleLink }: any, ref: any) {

  const [isOpen, setOpen] = useState(false);
  
  const handleButton = (id: string) => {
    setOpen(false);
    handleLink(id);
  }

  return (
    <header className="w-screen border-b border-lightGrey fixed z-40 bg-darkGrey">
      <div className="flex justify-between items-center h-[47px] w-screen px-10">
        <Logo className="text-[30px]" />
        <div className="w-max h-[163px] flex items-center justify-center gap-5 font-semibold">
          <button onClick={ () => handleButton('about') }>Sobre mim</button>
          <button onClick={ () => handleButton('projects') }>Projetos</button>
          <button onClick={ () => handleButton('contact') }>Contate-me</button>
        </div>
      </div>
    </header>
  )
}

const forwardWebNavbar = React.forwardRef(WebNavbar);

export default forwardWebNavbar;
