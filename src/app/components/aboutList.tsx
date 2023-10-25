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
    <section>
      <div>
        <button id='skills' onClick={handleButton}>Skills</button>
        <button id='studies' onClick={handleButton}>Estudos</button>
        <button id='certificates' onClick={handleButton}>Certificados</button>
      </div>
      <div>
        <ul>
          { 
            list == 0 &&
            skills.map(skill => <li>{ skill }</li>)
          }
          { 
            list == 1 &&
            studies.map(studie => <li>{ studie }</li>)
          }
          { 
            list == 2 &&
            certificates.map(certificate => <li>{ certificate }</li>)
          }
        </ul>
      </div>
    </section>
  )
}
