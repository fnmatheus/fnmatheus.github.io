function filterItems() {
  const items = ['ALL', 'JS', 'HTML', 'CSS'];
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
}

window.onload = startFunction;
