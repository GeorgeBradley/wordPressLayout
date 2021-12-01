

// Burger Menu  

const btnBurgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
btnBurgerMenu.addEventListener('click', function(){

  if (header.classList.contains('open')) //Close menuu
  {
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  } else { //open menu
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }

});

