import Image from 'next/image';

import Code from '../images/code.webp'
import AboutList from './aboutList';
import React from 'react';

function About({ addToRefs }: any, ref: any) {
  return (
    <section id="about" ref={ addToRefs } className="flex flex-col justify-center items-center px-[34px] gap-4 pb-4">
      <Image src={Code} alt="about image" className="w-[300px] rounded-lg" />
      <section className="flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold text-3xl">Sobre mim</h2>
        <p className="text-justify">
          Sou um jovem mineiro, apaixona- do em tecnologia e bem criativo!
          <br />
          <br />
          Minha jornada nesse mundo do desenvolvimento se deu ínicio quando tinha 12 anos. Atualmente busco poder ajudar, facilitar e solucionar problemas com minhas habilidades, sempre querendo aprender mais e ser melhor no que faço e amo.
        </p>
        <AboutList />
      </section>
    </section>
  )
}

const forwardAbout = React.forwardRef(About);

export default forwardAbout;
