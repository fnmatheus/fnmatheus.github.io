import AboutList from './aboutList';
import React from 'react';

function About({ addToRefs }: any, ref: any) {
  return (
    <section id="about" ref={ addToRefs } className="flex flex-col justify-center items-center px-[34px] gap-4 pb-4 lg:flex-row lg:justify-around">
      <div style={{backgroundImage: 'url(https://i.pinimg.com/736x/4e/b8/ef/4eb8eff24afb8fb967882c011142bff7.jpg)'}} className="w-[300px] h-[170px] rounded-lg bg-center bg-contain lg:w-[500px] lg:h-[270px] xl:w-[612px] xl:h-[340px]" />
      <section className="flex flex-col justify-center items-center gap-4 lg:w-1/2">
        <h2 className="font-bold text-3xl lg:text-4xl">Sobre mim</h2>
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
