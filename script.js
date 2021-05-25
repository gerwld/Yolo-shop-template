let navSearch = document.getElementById('nav-search'); // родитель поиска
let navSearchBtn = document.getElementById('nav-search-btn'); //кнопка поиска
let navSearchInput = document.getElementById('nav-search-block'); //поле поиска
let moreBtn = document.getElementById('more-nav'); //кнопка доп меню
let listBg = document.querySelector('.more-nav'); //бекграунд доп меню
let moreMenu = document.querySelector('.more-nav__list'); //список доп меню
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
//2 ивента на закрытие элементов при нажатии в любое место
document.addEventListener('mouseup', function(e) {
    if (!navSearchInput.contains(e.target)) {
    navSearch.classList.remove('search-open');
  }
});

document.addEventListener('mouseup', function(e) {
    if (!headerNav.contains(e.target)) {
      moreMenu.classList.remove('more-active');
      listBg.classList.remove('more-nav-active');
      mainNav.classList.remove('visuallyhidden');
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

//smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

//smooth scroll iOS Safari
(function() {
    scrollTo();
})();

function scrollTo() {
    const links = document.querySelectorAll('.scroll');
    links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 1000);
}
