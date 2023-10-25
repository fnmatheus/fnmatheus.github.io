import Image from 'next/image';

import Code from '../images/code.webp'
import AboutList from './aboutList';

export default function About() {
  return (
    <section>
      <Image src={Code} alt='about image' />
      <section>
        <h2>Sobre mim</h2>
        <p>
          Sou um jovem mineiro, apaixona- do em tecnologia e bem criativo! Minha jornada nesse mundo do desenvolvimento se deu ínicio quando tinha 12 anos. Atualmente busco poder ajudar, facilitar e solucionar problemas com minhas habilidades, sempre querendo aprender mais e ser melhor no que faço e amo.
        </p>
        <AboutList />
      </section>
    </section>
  )
}
