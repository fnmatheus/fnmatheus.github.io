function projectOptionsInformation(projectOptions, project) {
  const projectName = document.createElement('h1');
  projectName.innerText = project.name;
  projectName.style.visibility = 'hidden';
  projectOptions.appendChild(projectName);
  const projectFilters = document.createElement('p');
  projectFilters.innerText = project.classes;
  projectFilters.style.visibility = 'hidden';
  projectOptions.appendChild(projectFilters);
  const projectButton = document.createElement('button');
  projectButton.innerText = 'Show More';
  projectButton.style.visibility = 'hidden';
  projectButton.className = 'btn btn-outline-dark';
  projectOptions.appendChild(projectButton);
}

function hiddenProjectDatails(project) {
  const projectOptions = project.target.firstChild;
  projectOptions.style.height = '0';
  for (let index = 0; index < projectOptions.children.length; index += 1) {
    projectOptions.children[index].style.visibility = 'hidden';
  }
}

function showProjectDatails(project) {
  const projectOptions = project.target.firstChild;
  projectOptions.style.height = '100%';
  for (let index = 0; index < projectOptions.children.length; index += 1) {
    projectOptions.children[index].style.visibility = 'visible';
  }
}

function addProjects() {
  const projects = [{name: 'Lessons Learned', imageName: 'lessons-learned', classes: 'project HTML/CSS'}];
  const projectsGroup = document.querySelector('#projects-group');
  for (let index = 0; index < projects.length; index += 1) {
    const project = document.createElement('div');
    project.style.backgroundImage = `url('images/${projects[index].imageName}.png')`;
    project.className = projects[index].classes;
    project.addEventListener('mouseenter', showProjectDatails);
    project.addEventListener('mouseleave', hiddenProjectDatails);
    projectsGroup.appendChild(project);
    const projectOptions = document.createElement('div');
    projectOptions.classList.add('project-options');
    project.appendChild(projectOptions);
    projectOptionsInformation(projectOptions, projects[index]);
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
