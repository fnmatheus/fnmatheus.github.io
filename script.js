function addProjects() {
  const projects = [{name: 'lessons-learned', classes: 'project HTML/CSS'}];
  const projectsGroup = document.querySelector('#projects-group');
  for (let index = 0; index < projects.length; index += 1) {
    const project = document.createElement('div');
    project.style.backgroundImage = `url('images/${projects[index].name}.png')`;
    project.className = projects[index].classes;
    projectsGroup.appendChild(project);
  }
}

function filterItems() {
  const items = ['ALL', 'HTML/CSS'];
  const projectsFilters = document.querySelector('#projects-filters');
  for (let index = 0; index < items.length; index += 1) {
    const newFilter = document.createElement('li');
    newFilter.classList.add('filter-item');
    newFilter.innerText = items[index];
    projectsFilters.appendChild(newFilter);
  }
}

function startFunction() {
  filterItems();
  addProjects();
}

window.onload = startFunction;
