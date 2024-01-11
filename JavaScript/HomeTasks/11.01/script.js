let goods = [
	{ id: 1, title: 'Микроволновка', price: 1500, count: 4 },
	{ id: 2, title: 'Телевизор', price: 2500, count: 1 },
	{ id: 3, title: 'Тумба', price: 5500, count: 5 },
	{ id: 4, title: 'Холодильник', price: 200, count: 2 },
	{ id: 5, title: 'Стол', price: 5600, count: 5 },
	{ id: 6, title: 'Телефон', price: 1900, count: 12 },
	{ id: 7, title: 'Компьютер', price: 4200, count: 11 },
	{ id: 8, title: 'Мангал', price: 250, count: 7 },
	{ id: 9, title: 'Люстра', price: 300, count: 3 },
];

// Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID

goods.filter(elem => elem.id % 2 === 0);

// Отфильтруйте продукты с количеством менее 5 единиц

goods.filter(elem => elem.count < 5);

// Найдите значение элемента массива (продукта), цена которого будет кратна 5

console.log(goods.find(elem => elem.price % 5 === 0));

// Найдите индекс элемента, count которого будет больше 11

console.log(goods.findIndex(elem => elem.count > 11));

// Посчитайте количество элементов, count которых является нечетным числом

console.log(goods.filter(elem => elem.count % 2 != 0).length);

// Посчитайте количество элементов, имя которых начинается на “Т”

console.log(goods.filter(elem => elem.title[0] === 'Т').length);

// Проверьте, есть ли хотя бы один продукт с ценой выше 500.

console.log(goods.some(elem => elem.price > 500));

// Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)

console.log(goods.map(elem => elem.price * 0.65));

// Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)

console.log(goods.map(elem => ({ ...elem, count: 0 })));

// Отсортируйте продукты по возрастанию цены

console.log(goods.sort((a, b) => a.price - b.price));

// Отсортируйте массив по сво-ву title

console.log(
	goods.sort((a, b) => {
		if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
		if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
		else return 0;
	})
);
