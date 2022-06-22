function addDateOptions() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',];
  const monthsSelection = document.getElementById('month');
  for (let index of months) {
    const monthOption = document.createElement('option');
    monthOption.value = `${monthsSelection.children.length + 1}`;
    monthOption.innerText = index;
    monthsSelection.appendChild(monthOption);
  }
  const yearsSelection = document.getElementById('year');
  for (let year = new Date().getFullYear(); year >= 1905; year -= 1) {
    const yearOption = document.createElement('option');
    yearOption.value = `${yearsSelection.children.length + 1}`;
    yearOption.innerText = year;
    yearsSelection.appendChild(yearOption);
  }
}

function changeScreens(tag) {
  const login = document.getElementById('login');
  const register = document.getElementById('register');
  const button = tag.target;
  if (login.style.display === 'none') {
    button.className = 'btn btn-success';
    button.innerText = 'Create new account';
    login.style.display = 'flex';
    register.style.display = 'none';
  } else {
    button.className = 'btn btn-danger';
    button.innerText = 'Cancel';
    login.style.display = 'none';
    register.style.display = 'flex';
  }
}

window.onload = () => {
  addDateOptions();
  const newAccount = document.getElementById('change-button');
  newAccount.addEventListener('click', changeScreens);
};
