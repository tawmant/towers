const burgerMenu = document.querySelector('.menu-toggle'),
	nav = document.querySelector('.nav-list');

burgerMenu.addEventListener('click', function () {
	nav.classList.toggle('open');
	burgerMenu.classList.toggle('open');
});

// modal

function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);
	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = '';
}

function openModal(modalSelector) {
	const modal = document.querySelector(modalSelector);

	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';
}

function modal(triggerSelector, modalSelector) {
	const modalTrigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector);

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', () => openModal(modalSelector));
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal(modalSelector);
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal(modalSelector);
		}
	});

	function showModalByScroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight
		) {
			openModal(modalSelector);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);
}

modal('[data-modal]', '.modal');

// input
const inputs = document.querySelectorAll('input');

inputs.forEach((item) => {
	item.addEventListener('change', (e) => {
		const value = e.target.value;
		if (value.length > 0) {
			item.style.borderBottom = '1px solid #182D42'
		} else {
			item.style.borderBottom = '1px solid rgba(0, 0, 0, 0.2)'
		}
	});
});
