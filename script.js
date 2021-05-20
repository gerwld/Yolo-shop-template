let navSearch = document.getElementById('nav-search');
let navSearchBtn = document.getElementById('nav-search-btn');


navSearchBtn.onclick = function() {
  navSearch.classList.add('search-open');
  navSearch.focus();
}


document.addEventListener('mouseup', function(e) {
    if (!navSearch.contains(e.target)) {
    navSearch.classList.remove('search-open');
    }
});
