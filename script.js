let navSearch = document.getElementById('nav-search'); // родитель поиска
let navSearchBtn = document.getElementById('nav-search-btn'); //кнопка поиска
let navSearchInput = document.getElementById('nav-search-block'); //поле поиска
let moreBtn = document.getElementById('more-nav'); //кнопка доп меню
let listBg = document.querySelector('.more-nav'); //бекграунд доп меню
let moreMenu = document.querySelector('.more-nav__list'); //список доп меню
let moreMenuTablet = document.querySelector('.more-nav__list-tablet'); //список доп меню на <= 750
let mainNav = document.querySelector('.main-nav'); //основное меню
let headerNav = document.querySelector('.header-navbar'); //навбар

//появление поля поиска и проверка меню на открытость
navSearchBtn.onclick = function() {
  if(listBg.classList.contains('more-nav-active')) {
  moreBtnAction();
  searchOpen();
} else {
  searchOpen();
}}

//открытие меню при нажатии на кнопку
moreBtn.onclick = function() {
  moreBtnAction();
}
//3 ивента на закрытие элементов при нажатии в любое место
document.addEventListener('mouseup', function(e) {
    if (!navSearchInput.contains(e.target)) {
    navSearch.classList.remove('search-open');
  }
});

document.addEventListener('mouseup', function(e) {
    if (!headerNav.contains(e.target) || cartButton.contains(e.target)) {
      moreMenu.classList.remove('more-active');
      listBg.classList.remove('more-nav-active');
      mainNav.classList.remove('visuallyhidden');
      popupBlock.classList.remove('display-block');
  }
});

document.addEventListener('mouseup', function(e) {
    if (!popupBlock.contains(e.target)) {
    popupBlock.classList.remove('display-block');
  }
});

//функция поиска
function searchOpen(){
  navSearch.classList.add('search-open');
  navSearchInput.focus();
}

//функция меню
 function moreBtnAction() {
  moreMenu.classList.toggle('more-active');
  listBg.classList.toggle('more-nav-active');
  mainNav.classList.toggle('visuallyhidden');
  moreMenuTablet.classList.toggle('more-active-tablet');
}

// Sys.menu
let debugMenu = document.querySelector('.debug-menu');
let debugMenuBtn = document.querySelector('.debug-menu__button');

debugMenuBtn.onclick = function() {
  debugMenu.classList.toggle('debug-menu_hidden');
  if (debugMenu.classList.contains('debug-menu_hidden')) {
  debugMenuBtn.innerHTML = "+";
} else {debugMenuBtn.innerHTML = "✕";}
}


//increment + decrement input number

function increment(x) {
     document.getElementById(x).stepUp();
  }
  function decrement(x) {
     document.getElementById(x).stepDown();
  }

  //cart
let popupBlock = document.querySelector('.cart-popup');
let cartButton = document.getElementById('cart-button');

window.onload = function(){

  cartButton.onclick = function() {
    popupBlock.classList.add('display-block');

  }
}
//preloader

$(window).on('load',function(){
   $('.loader-wrapper').fadeOut('slow');
 });
