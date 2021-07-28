const burgerMenu = document.querySelector('.menu-toggle'),
	nav = document.querySelector('.nav-list');

burgerMenu.addEventListener('click', function () {
	nav.classList.toggle('open');
	burgerMenu.classList.toggle('open');
});