const navbarToggler = document.getElementById('navbar-toggler');
const navbarTogglerClose= document.getElementById('navbar-toggler-close');
const navbarTogglerSection = document.querySelector('.navbar-toggler-section');
const mainContent = document.querySelector('main');

navbarToggler.addEventListener('click',()=>{
    navbarTogglerSection.style.display = 'block';
    navbarToggler.style.visibility = 'hidden';
    mainContent.style.display='none'
})
navbarTogglerClose.addEventListener('click',()=>{
    navbarTogglerSection.style.display = 'none';
    navbarToggler.style.visibility = 'visible';
    mainContent.style.display='block'
})