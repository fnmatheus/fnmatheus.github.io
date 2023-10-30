"use client"
import React, { useState } from 'react';
import { projects } from '../utils/projects';
import { Code, Eye } from './svgs/Index';

function Projects({ addToRefs }: any, ref: any) {
  const [fillter, setFillter] = useState('all');
  const [hiddenProject, setHiddenProject] = useState(0);

  const handleFillter = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;

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
    <section id="projects" ref={ addToRefs } className="flex flex-col justify-center items-center px-[17px] gap-4 pb-4">
      <h2 className="font-bold text-3xl lg:text-4xl">Meus Projetos</h2>
      <section className="w-full">
        <div className="flex justify-around px-[17px] pb-4 md:justify-center md:gap-4">
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
        <div className="flex w-full justify-center">
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {
              projects.filter(project => project.tags.includes(fillter)).map((project, i) => 
                <li key={i} className="w-[172px] h-max flex flex-col gap-2 justify-center items-center pb-2 md:w-[225px]">
                  <div
                    id={String(project.id)}
                    className='w-[172px] h-[125px] bg-center bg-contain rounded-[16px] md:w-[225px] md:h-[164px]'
                    style={{backgroundImage: `url(${project.image})`}}
                    onClick={handleProject}
                  >
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
                  <h4 className="font-bold">
                    { project.name }
                  </h4>
                </li>
              )
            }
          </ul>
        </div>
      </section>
    </section>
  )
}

const forwardProjects = React.forwardRef(Projects);

export default forwardProjects;
