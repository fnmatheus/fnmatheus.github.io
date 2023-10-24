import Image from 'next/image'
import Photo from '../images/foto.webp'

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
      <div>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>
    </section>
  )
}
