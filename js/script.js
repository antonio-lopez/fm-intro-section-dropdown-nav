const hamburgerOpen = document.getElementById('hamburger-open');
const hambugerClose = document.getElementById('hamburger-close');
const menu = document.getElementById('menu');
const features = document.getElementById('features');
const featuresList = document.getElementById('features-list');
const company = document.getElementById('company');
const companyList = document.getElementById('company-list');

hamburgerOpen.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('hidden');
});

hambugerClose.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('hidden');
});

features.addEventListener('click', (e) => {
  e.preventDefault();
  featuresList.classList.toggle('hidden');
});

company.addEventListener('click', (e) => {
  e.preventDefault();
  companyList.classList.toggle('hidden');
});
