const hamburgerOpen = document.getElementById('hamburger-open');
const hambugerClose = document.getElementById('hamburger-close');
const menu = document.getElementById('menu');
const features = document.getElementById('features');
const featuresList = document.getElementById('features-list');
const company = document.getElementById('company');
const companyList = document.getElementById('company-list');
const featuresDesktop = document.getElementById('features-desktop');
const companyDesktop = document.getElementById('company-desktop');
const featuresContainer = document.getElementById('features-list-desktop');
const companyContainer = document.getElementById('company-list-desktop');
const companyMenu = document.getElementById('company-menu');
const featuresMenu = document.getElementById('features-menu');

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

featuresDesktop.addEventListener('mouseenter', () => {
  featuresContainer.classList.toggle('hidden');
});
featuresMenu.addEventListener('mouseleave', () => {
  featuresContainer.classList.toggle('hidden');
});
companyDesktop.addEventListener('mouseenter', () => {
  companyContainer.classList.toggle('hidden');
});
companyMenu.addEventListener('mouseleave', () => {
  companyContainer.classList.toggle('hidden');
});
