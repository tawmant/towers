// const room_1 = [
// 	{
// 		src: '1kv 41,06.png',
// 		title: '41m2',
// 	},
// 	{
// 		src: '1kv 43,60.png',
// 		title: '42m2',
// 	},
// 	{
// 		src: '1kv 44.05.png',
// 		title: '44m2',
// 	},
// 	{
// 		src: '1kv 44.96.png',
// 		title: '45m2',
// 	},
// ];

// const room_2 = [
// 	{
// 		src: '2kv 52.28.png',
// 		title: '53m2',
// 	},
// 	{
// 		src: '2kv 56.93.png',
// 		title: '57m2',
// 	},
// 	{
// 		src: '2kv 67.99.png',
// 		title: '67m2',
// 	},
// 	{
// 		src: '2kv 66.79.png',
// 		title: '68m2',
// 	},
// 	{
// 		src: '2kv 70.34.png',
// 		title: '71m2',
// 	},
// ];

// const room_3 = [
// 	{
// 		src: '3kv 81.93.png',
// 		title: '82m2',
// 	},
// 	{
// 		src: '3kv 99.36.png',
// 		title: '100m2',
// 	},
// ];

const room_1 = [
	{
		src: '1kv 38.68.png',
		title: '39m2',
	},
	{
		src: '1kv 40.53.png',
		title: '41m2',
	},
	{
		src: '1kv 41,06.png',
		title: '42m2',
	},
	{
		src: '1kv 43,60.png',
		title: '44m2',
	},
	{
		src: '1kv 43.56.png',
		title: '44m2',
	},
	{
		src: '1kv 44.05.png',
		title: '45m2',
	},
	{
		src: '1kv 44.96.png',
		title: '45m2',
	},
];

const room_2 = [
	{
		src: '2kv 52.28.png',
		title: '53m2',
	},
	{
		src: '2kv 56.93.png',
		title: '57m2',
	},
	{
		src: '2kv 66.62.png',
		title: '67m2',
	},
	{
		src: '2kv 66.79.png',
		title: '67m2',
	},
	{
		src: '2kv 67.99.png',
		title: '68m2',
	},
	{
		src: '2kv 70.34.png',
		title: '71m2',
	},
];

const room_3 = [
	{
		src: '3kv 81.93.png',
		title: '82m2',
	},
	{
		src: '3kv 99.36.png',
		title: '100m2',
	},
];

const parentSpinner = document.querySelector('.apartment-select__wrapper');
const spinner = document.createElement('div');
spinner.classList.add('spinner-grow', 'text-warning');
spinner.setAttribute('role', 'status');
spinner.setAttribute('style', 'width: 6rem; height: 6rem; margin: auto;');
spinner.innerHTML = `
<span class="visually-hidden">Loading...</span>
`;
parentSpinner.append(spinner);

const room_amounts = document.querySelectorAll('.apartment-select__amount');
const areasCont = document.querySelector('.apartment-select__rooms-areas');
const apartmentImg = document.querySelector('.apartment-select__selected-image');

room_amounts.forEach((item, i) => {
	item.addEventListener('click', () => {
		room_amounts.forEach((element) => {
			element.classList.remove('apartment-select__active-btn');
		});
		item.classList.add('apartment-select__active-btn');
		const btnAttr = item.getAttribute('value');
		btnAttr === 'room_1' ? createAreas(room_1) : btnAttr === 'room_2' ? createAreas(room_2) : createAreas(room_3);
	});
});

apartmentImg.addEventListener('load', () => {
	spinner.style.display = 'none';
	apartmentImg.style.display = 'block';
});

createAreas(room_1);

function createAreas(areas) {
	areasCont.innerHTML = '';
	areas.forEach((area) => {
		const newButton = document.createElement('button');
		newButton.setAttribute('value', area.src);
		newButton.classList.add('apartment-select__area');
		newButton.classList.add('apartment-select__btn');
		newButton.innerHTML = area.title;
		areasCont.appendChild(newButton);
	});

	const areaBtns = document.querySelectorAll('.apartment-select__area');
	areaBtns.forEach((areaBtn) => {
		areaBtn.addEventListener('click', (e) => {
			spinner.style.display = 'block';
			apartmentImg.style.display = 'none';
			areaBtns.forEach((areaBtnJ) => {
				areaBtnJ.classList.remove('apartment-select__active-btn');
			});
			areaBtn.classList.add('apartment-select__active-btn');
			apartmentImg.setAttribute('src', `./assets/images/apartments/${e.target.value}`);
		});
	});
}

const apartmentSeImg = document.querySelector('.apartment-select__selected-image');
const apartment_select_modal = document.getElementById('com_premises__modal');
const apartment_select_modal__img = document.getElementById('com_premises__modal__img');

apartmentSeImg.addEventListener('click', () => {
	const value = apartmentSeImg.getAttribute('src');
	apartment_select_modal.classList.add('open');
	apartment_select_modal__img.setAttribute('src', value);
	document.body.style.overflow = 'hidden';
});

apartment_select_modal.addEventListener('click', () => {
	apartment_select_modal.classList.remove('open');
	document.body.style.overflow = '';
});
