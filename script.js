let navSearch = document.getElementById('nav-search');
let navSearchBtn = document.getElementById('nav-search-btn');
let moreBtn = document.getElementById('more-nav');
let listBg = document.querySelector('.more-nav');
let moreMenu = document.querySelector('.more-nav__list');
let mainNav = document.querySelector('.main-nav');

navSearchBtn.onclick = function() {
  navSearch.classList.add('search-open');
  navSearch.focus();
}

document.addEventListener('mouseup', function(e) {
    if (!navSearch.contains(e.target)) {
    navSearch.classList.remove('search-open');
    }
});

moreBtn.onclick = function() {
  moreMenu.classList.toggle('more-active');
  listBg.classList.toggle('more-nav-active');
  mainNav.classList.toggle('visuallyhidden');
}
