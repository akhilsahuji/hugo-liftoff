// Responsive mobile navbar

let navBar = document.getElementById('js-navbar');
let mainMenu = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar__toggle');

let menuItems = document.querySelectorAll('.menu__item');

let tocToggle = document.getElementById('js-toc__toggle');
let tocContents = document.getElementById('js-toc__contents');

// Show or hide nav on click of menu burger
navBarToggle.addEventListener('click', function () {
    navBar.classList.toggle('main-nav--active');
    mainMenu.classList.toggle('main-nav--active');    
});

// Show or hide menu items on mobile
menuItems.forEach(function(item) {
    item.addEventListener('click', function () {
        let subMenu = item.querySelector('.sub-menu');
        subMenu.classList.toggle('sub-menu--active');
    });
});

// Show or hide toc on click of toggle
if (tocToggle) {
    tocToggle.addEventListener('click', function () {
        tocContents.classList.toggle('single__toc-contents--active');
    });
}