const div = document.createElement('div');
div.classList.add('wrapper');
document.body.append(div);
const header = document.createElement('h1');
header.innerText = 'Document Object Model';
// document.body.prepend(header);
div.insertAdjacentElement('beforebegin', header);
const ul = `
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
`;
div.innerHTML = ul;
const img = document.createElement('img');
img.src =
	'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1600';
img.width = 240;
img.classList.add('super');
img.alt = 'Super Man';
div.append(img);

const elemHTML = `
<div class='pDiv'>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</div>`;
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML);

const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
pDiv.children[0].remove();

const generateAutoCard = (brand, color, year) => {
	const curDate = new Date();
	const curYear = curDate.getFullYear();
	return `
  <div class = "autoCard">
    <h2>${brand.toUpperCase()} ${year}</h2>
    <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто -  ${
		curYear - year
	}лет.</p>
    <p>Цвет: ${color}
    <button type='button' class='btn'>Delete</button>
  </div>
  `;
};

const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

const carsList = [
	{ brand: 'Tesla', year: 2015, color: 'red' },
	{ brand: 'Lexus', year: 2016, color: 'silver' },
	{ brand: 'Nissan', year: 2012, color: 'black' },
];

const carsHTML = carsList
	.map(car => {
		return generateAutoCard(car.brand, car.color, car.year);
	})
	.join('');

carsDiv.innerHTML = carsHTML;

div.insertAdjacentElement('beforebegin', carsDiv);

const buttons = document.querySelectorAll('.btn');

function deleteButtons(e) {
	const currentButton = e.currentTarget;
	currentButton.parentElement.remove();
	console.log(currentButton.parentElement);
}

buttons.forEach(button => {
	button.addEventListener('click', deleteButtons);
});
