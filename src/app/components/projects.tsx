import ProjectsList from "./projectsList";

export default function Projects() {
  return (
    <section className="flex flex-col justify-center items-center px-[34px] gap-4 pb-4">
      <h2 className="font-bold text-3xl">Meus Projetos</h2>
      <ProjectsList />
    </section>
  )
}
