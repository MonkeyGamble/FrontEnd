// Создать форму в html (наименование товара и цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.
// Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта. Вывести массив в консоль.

let form = document.forms.product_form; //поиск формы по name
let products = [];
let productName = form.querySelector('.name_input');
let productPrice = form.querySelector('.price_input');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let product_obj = {
		title: productName.value,
		price: Number(productPrice.value),
	};
	products.push(product_obj);
	// console.log(products);

	rerender();

	form.reset();
});

// Добавить функцию, которая получает наименование карточки и цену и возвращает HTML элемент с карточкой товара.

function createProductCard({ title, price }) {
	let pTitle = document.createElement('p');
	pTitle.innerText = title;

	let pPrice = document.createElement('p');
	pPrice.innerText = price;

	let productCard = document.createElement('div');
	productCard.classList.add('product_card');
	productCard.append(pTitle, pPrice);

	return productCard;
}

// Разработать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с товарами из массива. Настроить rerender при добавлении нового продукта.

function rerender() {
	let productsList = document.querySelector('.products_list_container');
	productsList.innerHTML = ''; //очищаем контейнер

	// Добавить отображение фразы “товаров нет”, когда товаров нет
	if (products.length == 0) {
		let emptyP = document.createElement('p');
		emptyP.classList.add('empty_p');
		emptyP.innerText = 'Товаров нет';
		productsList.append(emptyP);
	}
	if (productName !== '' && productPrice !== '') {
		let productCardElem = createProductCard(products[i]);

		let removeBtn = getRedButton();
		productCardElem.append(removeBtn);

		removeBtn.addEventListener('click', function () {
			products.splice(i, 1);
			rerender();
		});
		productsList.append(productCardElem);
	}
}

// Добавить функцию, которая возвращает кнопку в виде крестика в красном кружке.

function getRedButton() {
	let redButton = document.createElement('button');
	redButton.classList.add('remove_btn');
	redButton.innerText = 'X';
	return redButton;
}
