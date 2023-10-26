"use client"
import { useState } from 'react';
import { projects } from '../utils/projects';
import { Code, Eye } from './svgs/Index';

export default function Projects() {
  const [fillter, setFillter] = useState('all');
  const [hiddenProject, setHiddenProject] = useState(0);

  const handleFillter = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    console.log('aqui');

    if(target.id === 'all') setFillter('all');
    else if(target.id == 'frontend') setFillter('frontend');
    else setFillter('backend');
  }

  const handleProject = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    setHiddenProject(Number(target.id));
  }

  const handleLink = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLButtonElement;
    window.open(target.id, '_blank');
  }
  
  return (
    <section className="flex flex-col justify-center items-center px-[17px] gap-4 pb-4">
      <h2 className="font-bold text-3xl">Meus Projetos</h2>
      <section className="w-full">
        <div className="flex justify-around px-[17px]">
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
                  <div id={String(project.id)} className="w-[172px] h-[125px] bg-purple rounded-[16px]" onClick={handleProject}>
                    {
                      (hiddenProject === project.id) &&
                      <>
                        <div className="absolute w-[172px] h-[125px] bg-darkGrey rounded-[16px] z-0 opacity-60" />
                        <div className="flex justify-around items-center h-full text-5xl">
                          <button id={project.codeLink} className="relative z-10" onClick={handleLink}>
                            <Code />
                          </button>
                          <button id={project.link} className="relative z-10" onClick={handleLink}>
                            <Eye />
                          </button>
                        </div>
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
