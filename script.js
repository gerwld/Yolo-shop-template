let navSearch = document.getElementById('nav-search');
let navSearchBtn = document.getElementById('nav-search-btn');
let navSearchInput = document.getElementById('nav-search-block');
let moreBtn = document.getElementById('more-nav');
let listBg = document.querySelector('.more-nav');
let moreMenu = document.querySelector('.more-nav__list');
let mainNav = document.querySelector('.main-nav');

navSearchBtn.onclick = function() {
  if(listBg.classList.contains('more-nav-active')) {
  moreBtnAction();
  navSearch.classList.add('search-open');
  navSearch.focus();
  navSearchInput.focus();
} else {
  navSearch.classList.add('search-open');
  navSearchInput.focus();
  console.log('1');
}}

moreBtn.onclick = function() {
  moreBtnAction();
}

document.addEventListener('mouseup', function(e) {
    if (!navSearchInput.contains(e.target)) {
    navSearch.classList.remove('search-open');
    }
});

 function moreBtnAction() {
  moreMenu.classList.toggle('more-active');
  listBg.classList.toggle('more-nav-active');
  mainNav.classList.toggle('visuallyhidden');
}
