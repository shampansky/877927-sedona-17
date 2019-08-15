'use stirct';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__menu-btn');
var header = document.querySelector('.page-header');
header.classList.remove('page-header--nojs');
if (navToggle) {
  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--opened');
    }
  });
}
