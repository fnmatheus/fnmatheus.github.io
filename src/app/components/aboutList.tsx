"use client"

import React, { useState } from 'react';

export default function AboutList() {
  const [list, setList] = useState(0);

  const skills = ['JavaScript', 'React (Next.js)', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'HTML'];
  const studies = ['Trybe (FullStack)']
  const certificates = ['Front-end (Trybe)', 'BackEnd(Trybe)', 'Computer Science (Trybe)']

  const handleButton = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;

    if(target.id === 'skills') setList(0);
    else if(target.id == 'studies') setList(1);
    else setList(2);
  };

  return (
    <section className="w-full flex flex-col gap-7">
      <div className="w-full flex justify-between font-bold text-lg">
        <button id='skills' onClick={handleButton} className="flex flex-col justify-center items-center">
          Skills
          <div className={`w-[40px] h-[3px] ${(list !== 0) ? 'bg-transparent' : 'bg-purple'} rounded-full`} />
        </button>
        <button id='studies' onClick={handleButton} className="flex flex-col justify-center items-center">
          Estudos
          <div className={`w-[40px] h-[3px] ${(list !== 1) ? 'bg-transparent' : 'bg-purple'} rounded-full`} />
        </button>
        <button id='certificates' onClick={handleButton} className="flex flex-col justify-center items-center">
          Certificados
          <div className={`w-[40px] h-[3px] ${(list !== 2) ? 'bg-transparent' : 'bg-purple'} rounded-full`} />
        </button>
      </div>
      <div className="h-[180px]">
        <ul className="list-inside list-disc">
          { 
            list == 0 &&
            skills.map(skill => <li key={skill}>{ skill }</li>)
          }
          { 
            list == 1 &&
            studies.map(studie => <li key={studie}>{ studie }</li>)
          }
          { 
            list == 2 &&
            certificates.map(certificate => <li key={certificate}>{ certificate }</li>)
          }
        </ul>
      </div>
    </section>
  )
}
