function btnProject(clicked) {
  const currentProject = clicked.target.parentNode.firstChild.innerText.split(' ');
  let pasteName = '';
  for (let index = 0; index < currentProject.length; index += 1) {
    pasteName += currentProject[index].toLowerCase();
  }
  window.open(`assets/projects-pages/${pasteName}/index.html`);
}

function projectOptionsInformation(projectOptions, project) {
  let hardSkillsArray = project.classes.split(' ');
  hardSkillsArray.shift();
  let hardSkills = ''
  for (let index = 0; index < hardSkillsArray.length; index += 1) {
    hardSkills += `${hardSkillsArray[index]} `;
  }
  const projectName = document.createElement('h1');
  projectName.innerText = project.name;
  projectOptions.appendChild(projectName);
  const projectFilters = document.createElement('p');
  projectFilters.innerText = hardSkills;
  projectOptions.appendChild(projectFilters);
  const projectButton = document.createElement('button');
  projectButton.innerText = 'Show More';
  projectButton.className = 'btn btn-outline-dark';
  projectButton.addEventListener('click', btnProject);
  projectOptions.appendChild(projectButton);
}

function addProjects() {
  const projects = [{name: 'Lessons Learned', imageName: 'lessons-learned', classes: 'project HTML/CSS'}];
  const projectsGroup = document.querySelector('#projects-group');
  for (let index = 0; index < projects.length; index += 1) {
    const project = document.createElement('div');
    project.style.backgroundImage = `url('assets/images/${projects[index].imageName}.png')`;
    project.className = projects[index].classes;
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
