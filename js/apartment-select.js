const room_1 = [
	{
		src: '1kv 38.68.png',
		title: '38m2',
	},
	{
		src: '1kv 40.53.png',
		title: '40m2',
	},
	{
		src: '1kv 41,06.png',
		title: '41m2',
	},
	{
		src: '1kv 43,60.png',
		title: '43m2',
	},
	{
		src: '1kv 43.56.png',
		title: '43m2',
	},
	{
		src: '1kv 44.05.png',
		title: '44m2',
	},
	{
		src: '1kv 44.96.png',
		title: '44m2',
	},
];

const room_2 = [
	{
		src: '2kv 52.28.png',
		title: '52m2',
	},
	{
		src: '2kv 56.93.png',
		title: '56m2',
	},
	{
		src: '2kv 66.62.png',
		title: '66m2',
	},
	{
		src: '2kv 66.79.png',
		title: '66m2',
	},
	{
		src: '2kv 67.99.png',
		title: '67m2',
	},
	{
		src: '2kv 70.34.png',
		title: '70m2',
	},
];

const room_3 = [
	{
		src: '3kv 81.93.png',
		title: '81m2',
	},
	{
		src: '3kv 99.36.png',
		title: '99m2',
	},
];

const room_amounts = document.querySelectorAll('.apartment-select__amount');

for (let i = 0; i < room_amounts.length; i++) {
	room_amounts[i].addEventListener('click', () => {
		for (let j = 0; j < room_amounts.length; j++) {
			room_amounts[j].classList.remove('apartment-select__active-btn');
		}
		room_amounts[i].classList.add('apartment-select__active-btn');
		const btnAttr = room_amounts[i].getAttribute('value');
		btnAttr === 'room_1' ? createAreas(room_1) : btnAttr === 'room_2' ? createAreas(room_2) : createAreas(room_3);
	});
}

const areasCont = document.querySelector('.apartment-select__rooms-areas');
const apartmentImg = document.querySelector('.apartment-select__selected-image');


const parentSpinner = document.querySelector('.apartment-select__wrapper');
const spinner = document.createElement('div');
spinner.classList.add('spinner-grow', 'text-warning');
spinner.setAttribute('role', 'status');
spinner.innerHTML = `
<span class="visually-hidden">Loading...</span>
`;
parentSpinner.append(spinner);

function createAreas(areas) {
	areasCont.innerHTML = '';
	for (let i = 0; i < areas.length; i++) {
		let area = areas[i];
		const newButton = document.createElement('button');
		newButton.setAttribute('value', area.src);
		newButton.classList.add('apartment-select__area');
		newButton.classList.add('apartment-select__btn');
		newButton.innerHTML = area.title;
		areasCont.appendChild(newButton);
	}

	const areaBtns = document.querySelectorAll('.apartment-select__area');
	for (let i = 0; i < areaBtns.length; i++) {
		areaBtns[i].addEventListener('click', (e) => {
			for (let j = 0; j < areaBtns.length; j++) {
				areaBtns[j].classList.remove('apartment-select__active-btn');
			}
			areaBtns[i].classList.add('apartment-select__active-btn');
			apartmentImg.setAttribute('src', `./assets/images/apartments/${e.target.value}`);
		});
	}
}
apartmentImg.oncload = function () {
	console.log('test');
};

apartmentImg.addEventListener('load', (e) => {
  createAreas(room_1);
  spinner.style.display = 'none'
});
