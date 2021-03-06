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
		e.preventDefault();
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
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
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
			item.style.borderBottom = '1px solid #182D42';
		} else {
			item.style.borderBottom = '1px solid rgba(0, 0, 0, 0.2)';
		}
	});
});

// location
const iframe = document.querySelector('.location__iframe'),
	fakeImg = document.querySelector('.location-m__fake-img');

fakeImg.addEventListener('click', () => {
	fakeImg.classList.add('hide');
	iframe.classList.remove('hide');
	iframe.classList.add('show');
});

document.getElementById('scroll_container').addEventListener('wheel', function (event) {
	if (event.deltaMode == event.DOM_DELTA_PIXEL) {
		var modifier = 1;
		// ???????? ???????????? ???????????????? ?? Firefox
	} else if (event.deltaMode == event.DOM_DELTA_LINE) {
		var modifier = parseInt(getComputedStyle(this).lineHeight);
	} else if (event.deltaMode == event.DOM_DELTA_PAGE) {
		var modifier = this.clientHeight;
	}
	if (event.deltaY != 0) {
		// ???????????? ???????????????????????? ?????????????????? ????????????????????????????
		this.scrollLeft += modifier * event.deltaY;
		event.preventDefault();
	}
});

// history slider
const parentBtns = document.querySelector('.history__btns');
btns = Array.from(parentBtns.querySelectorAll('.history__btn'));

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const target = e.target;
		btns.forEach((item) => {
			if (item.getAttribute('aria-disabled') === 'true') {
				item.children[0].setAttribute('stroke', '#D0D0D0');
			} else {
				item.children[0].setAttribute('stroke', '#D9A85D');
			}
		});
	});
});
