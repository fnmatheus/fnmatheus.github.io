interface IProject {
  name: string,
  image: string,
  codeLink: string,
  link: string,
  tags: string[],
  isOpenSource: boolean,
  id: number
}

interface IHardSkills {
  name: string,
  url: string
}

interface IHardSkillsList {
  skills: IHardSkills[],
  studies: IHardSkills[],
  certificates: IHardSkills[]
}

export type {
  IProject,
  IHardSkillsList
}
