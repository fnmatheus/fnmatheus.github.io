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
          <div className={`${fillter === 'all' ? 'bg-gradient-to-l from-lightBlue to-purple' : 'bg-grey'} w-[96px] h-[27px] rounded-full flex justify-center items-center p-[2px]`}>
            <button id="all" onClick={handleFillter} className="w-full h-full rounded-full bg-darkGrey flex justify-center items-center">
              todos
            </button>
          </div>
          <div className={`${fillter === 'frontend' ? 'bg-gradient-to-l from-lightBlue to-purple' : 'bg-grey'} w-[96px] h-[27px] rounded-full flex justify-center items-center p-[2px]`}>
            <button id="frontend" onClick={handleFillter} className="w-full h-full rounded-full bg-darkGrey flex justify-center items-center">
              front-end
            </button>
          </div>
          <div className={`${fillter === 'backend' ? 'bg-gradient-to-l from-lightBlue to-purple' : 'bg-grey'} w-[96px] h-[27px] rounded-full flex justify-center items-center p-[2px]`}>
            <button id="backend" onClick={handleFillter} className="w-full h-full rounded-full bg-darkGrey flex justify-center items-center">
              backend
            </button>
          </div>
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
