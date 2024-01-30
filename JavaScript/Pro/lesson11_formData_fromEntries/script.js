// let obj = {
// 	name: 'Alex',
// 	age: 30,
// };

// localStorage.setItem('key', JSON.stringify(obj)); //конвертируем объект в строковый JSON-тип

// console.log(JSON.parse(localStorage.getItem('key'))); //конвертирует в JS-объект

// Задача
// Имеется строка со структурой массива.
// Используя объект JSON преобразуйте данную строку в массив, добавьте в нее
// еще пару чисел (80,90) и преобразуйте обратно в строку.

// let string = '[20,50,60,70]';

// // Результат:
// // '[20,50,60,70,80,90]'

// let result = JSON.parse(string);
// result.push(80, 90);
// console.log(JSON.stringify(result));

// --------------------------
// Задача
// Опишите две функции: writeLocalStorage(obj) и readLocalStorage().
// Функции должны записывать или считывать объекты в localStorage соответственно.
// writeLocalStorage должен в качестве аргумента получить объект
// readLocalStorage должен в консоль вернуть сам ОБЪЕКТ из LS

// let obj = {
// 	name: 'Alex',
// 	age: 35,
// };

// function writeLocalStorage(obj) {
// 	return localStorage.setItem('key', JSON.stringify(obj));
// }

// function readLocalStorage() {
// 	console.log(JSON.parse(localStorage.getItem('key')));
// }

// writeLocalStorage(obj);
// readLocalStorage();

let default_data = [
	{ id: 1, title: 'Велосипед', price: 15000 },
	{ id: 2, title: 'Самокат', price: 2000 },
	{ id: 3, title: 'Ноутбук', price: 30000 },
	{ id: 4, title: 'Стол', price: 10000 },
	{ id: 5, title: 'Телевизор', price: 23000 },
];

let data = JSON.parse(localStorage.getItem('products')) ?? default_data;

let div_products = document.querySelector('.product_wrapper');

let add_form = document.querySelector('.add_form');
let remove_form = document.querySelector('.remove_form');

// add_form.onsubmit = event => {
// 	event.preventDefault(); //приводит настройки браузера к дефолтным
// 	console.log(event.target[0].value);
// };

add_form.onsubmit = event => {
	event.preventDefault(); //приводит настройки браузера к дефолтным
	let form_data = new FormData(event.target);
	let inp_data = Object.fromEntries(form_data); //из любого ссылочного типа делает объект
	addNewProduct(inp_data);
};

// Реализовать новую форму, которая будет включать инпут, по которому необходимо реализовать удаление товара
// В инпут необходимо передать значение ID товара и после нажатия товар должен быть удален на стороне разметки.

remove_form.onsubmit = event => {
	event.preventDefault();
	let form_data = new FormData(event.target);
	let value_id = form_data.get('id');
	removeProduct(+value_id);
};

function addNewProduct(info) {
	data.push({ ...info, id: Date.now() });
	render(data);
}

function removeProduct(id) {
	data = data.filter(elem => elem.id != id);
	render(data);
}

function rerender(array) {
	render(array);
}

function render(array) {
	div_products.innerHTML = '';
	toLocalStorage(array);
	for (let elem of array) {
		let div_card = document.createElement('div');
		div_card.classList.add('card');
		let h_title = document.createElement('h2');
		let p_price = document.createElement('p');

		h_title.innerText = `${elem.id} \n ${elem.title}`;
		p_price.innerText = elem.price;

		div_card.append(h_title, p_price);
		div_products.append(div_card);
	}
}

/// 2) Реализовать механизмы работы LS. После каждого изменения массива должно просиходить сохранение документа.
function toLocalStorage(obj) {
	localStorage.setItem('products', JSON.stringify(obj));
}

// После обновления массив не должен меняться. В случае, если LS не будет, оставить массив data.
// function fromLocalStorage() {
// 	let reloadData = localStorage.getItem('products');
// 	if (reloadData) data = JSON.parse(reloadData);
// }

// fromLocalStorage();
render(data);
