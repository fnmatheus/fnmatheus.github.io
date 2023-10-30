import React from "react";

function Contact({ addToRefs }: any, ref: any) {
  return (
    <section id="contact" ref={ addToRefs } className="flex flex-col justify-center items-center px-[34px] gap-4 w-full lg:flex-row">
      <div className="flex flex-col justify-center items-center px-[34px] gap-4 w-full lg:items-start lg:gap-2">
        <h2 className="font-bold text-3xl lg:text-4xl">Entre em contato!</h2>
        <p className="text-justify lg:text-lg">
          Estou sempre olhando para novas oportunidade e disponivel para contato.
          <br />
          Se tiver alguma pergunta ou precisar entrar em contato, vou responder mais breve possível!
        </p>
      </div>
      <div className="flex flex-col w-full gap-4 lg:w-[426px]">
        <a href="mailto:nasc.matheusfrancisco@gmail.com" target="_blank" className="w-full h-[44px] bg-gradient-to-l from-lightBlue to-purple rounded-full flex justify-center items-center text-xl lg:w-[426px]">
          enviar e-mail!
        </a>
        <a href="https://api.whatsapp.com/send?phone=5532998656140" target="_blank" className="w-full h-[44px] bg-gradient-to-l from-lightBlue to-purple rounded-full flex justify-center items-center text-xl lg:w-[426px]">
          enviar whatsapp!
        </a>
      </div>
    </section>
  )
}

const forwardContact = React.forwardRef(Contact);

export default forwardContact;
