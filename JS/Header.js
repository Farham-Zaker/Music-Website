const menuMobileIcone = document.querySelector('header .menu-mobile-icone');
const mainLine = document.querySelector('header .main-line')

const menuMobile = document.querySelector('header .menu-mobile');

menuMobileIcone.addEventListener('click' , () =>{
  mainLine.classList.toggle('active');
  menuMobileIcone.classList.toggle('active');

  menuMobile.classList.toggle('avtive')
})