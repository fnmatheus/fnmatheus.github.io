const addAllProjects = () => {
  const projects = JSON.parse(fs.readFileSync(json/projects.json));
  console.log(projects);
}

window.onload = () => {
  addAllProjects();
};
