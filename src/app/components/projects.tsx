"use client"
import { useState } from 'react';
import { projects } from '../utils/projects';
import { Code, Eye } from './svgs/Index';

export default function Projects() {
  const [fillter, setFillter] = useState('all');

  const handleFillter = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;

    if(target.id === 'all') setFillter('all');
    else if(target.id == 'frontend') setFillter('frontend');
    else setFillter('backend');
  }
  
  return (
    <section className="flex flex-col justify-center items-center px-[34px] gap-4 pb-4">
      <h2 className="font-bold text-3xl">Meus Projetos</h2>
      <section className="w-full">
        <div className="flex justify-around">
          <button id="all" onClick={handleFillter}>
            todos
          </button>
          <button id="frontend" onClick={handleFillter}>
            front-end
          </button>
          <button id="backend" onClick={handleFillter}>
            backend
          </button>
        </div>
        <div>
          <ul>
            {
              projects.filter(project => project.tags.includes(fillter)).map((project, i) => 
                <li key={i}>
                  <div>
                    {
                      true &&
                      <>
                        <a href={project.codeLink} target="_blank">
                          <Code />
                        </a>
                        <a href={project.link} target="_blank">
                          <Eye />
                        </a>
                      </>
                    }
                  </div>
                  { project.name }
                </li>
              )
            }
          </ul>
        </div>
      </section>
    </section>
  )
}
