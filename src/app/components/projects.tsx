"use client"
import { useState } from 'react';
import { projects } from '../utils/projects';

export default function Projects() {
  const [fillter, setFillter] = useState('all');
  
  return (
    <section className="flex flex-col justify-center items-center px-[34px] gap-4 pb-4">
      <h2 className="font-bold text-3xl">Meus Projetos</h2>
      <section>
        <div>
          <button>
            todos
          </button>
          <button>
            front-end
          </button>
          <button>
            backend
          </button>
        </div>
        <div>
          <ul>
            {
              fillter === 'all' &&
              projects.map((project, i) => 
                <li key={i}>
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
