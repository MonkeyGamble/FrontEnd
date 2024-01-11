// // Создайте новый элемент
// // , добавьте ему текст и добавьте его после элемента с id "existingElement".

// const newElem = document.createElement('h2');
// newElem.innerText = "I'm behind you!";
// const prevElem = document.querySelector('#existingElement');
// prevElem.insertAdjacentElement('afterend', newElem);

// // Создайте новый элемент , добавьте ему текст и вставьте его внутрь элемента с id "parentElement".

// const newElem2 = document.createElement('button');
// newElem2.innerText = 'Click Me!';
// const parent = document.querySelector('#parentElement');
// parent.append(newElem2); //parent.appendChild(newElem2);

// // Удалите элемент с классом "removeMe".

// const newElem3 = document.querySelector('.removeMe');
// newElem3.remove();

// Создать множество карточек с товарами (на основе массива с объектами. У объекта свойства title, unit_price, count);
// Написать скрипт, который выводит карточки с товарами в интерфейс (на основе массива с объектами. У объекта свойства title, unit_price, count), а внизу выводится итоговая сумма товаров и их количество.

let productArray = [
	{ title: 'Mazda', unit_price: 20000, count: 6 },
	{ title: 'Toyota', unit_price: 25000, count: 5 },
	{ title: 'Honda', unit_price: 15000, count: 12 },
	{ title: 'Mitsubishi', unit_price: 27000, count: 11 },
	{ title: 'Suzuki', unit_price: 10000, count: 20 },
];

const cardContainer = document.createElement('div');
cardContainer.classList.add('container');
let totalAmountCars = 0;
let totalCost = 0;

function getCards(array) {
	for (let i = 0; i < array.length; i++) {
		const card = document.createElement('div');
		card.classList.add(`card${i + 1}`);
		const title = document.createElement('h3');
		title.innerText = `Марка: ${array[i].title}`;
		const unit_price = document.createElement('p');
		unit_price.innerText = `Цена: $${array[i].unit_price}`;
		const count = document.createElement('p');
		count.innerText = `Кол-во на складе: ${array[i].count} шт.`;
		const totalSum = document.createElement('p');
		totalSum.innerText = `На общую сумму: $${
			array[i].unit_price * array[i].count
		}`;

		totalAmountCars += array[i].count;
		totalCost += array[i].unit_price * array[i].count;

		card.append(title);
		card.append(unit_price);
		card.append(count);
		card.append(totalSum);
		cardContainer.append(card);
	}
	document.body.append(cardContainer);

	const resultCard = document.createElement('div');
	resultCard.classList.add('resultCard');
	const titleCard = document.createElement('h3');
	titleCard.innerText = 'ИТОГО:';
	const carsStock = document.createElement('p');
	carsStock.innerText = `Всего автомобилей на складе: ${totalAmountCars}`;
	const totalCostCars = document.createElement('p');
	totalCostCars.innerText = `На общую сумму: $${totalCost}`;
	resultCard.append(titleCard);
	resultCard.append(carsStock);
	resultCard.append(totalCostCars);
	document.body.append(resultCard);
}

getCards(productArray);
