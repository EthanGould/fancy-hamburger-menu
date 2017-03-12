var module = {};

module.toggleHamburger = function() {
	document
		.querySelector('.hamburger-menu')
		.classList.toggle('open');
}

module.init = function() {
	document
		.querySelector('.hamburger')
		.addEventListener('click', module.toggleHamburger);
}

window.addEventListener('DOMContentLoaded', module.init);
