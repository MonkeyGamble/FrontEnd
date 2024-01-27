// МЕТОДЫ МАССИВОВ

// 1. Простые методы, принимают простое значение, вообще не принимаю аргументов, мутирую исходный массив

// .push() - добавляет элемент в конец массива
// .pop() - удаляет элемент из конца массива
// .shift() - удаляет элемент из начала массива
// .unshift() - добавляет элемент в начало массива

// 2. Методы, принимающие в качестве агрумента callback-функцию

// .forEach(() => {}) - метод, который применяет переданную функцию к каждому элементу массива. Возвращает undefined = ничего не возвращает
// .map(() => {}) - метод, который применяет переданную функцию к каждому элементу массива. Возвращает новый массив

// .filter(() => {}) - метод, который формирует/возвращает новый массив, в который попадают только те элементы исходного массива, которые подошли по переданному условию

// .reduce(() => {})
// .sort(() => {})

// Callback-фунция - функция, переданная внутрь другой функции в качестве аргумента
// Функция высшего порядка - функция, которая принимает callback-функцию в качестве аргумента

// .find(() => {}) - метод, который возвращает первый элемент массива, который подошел по переданному условию

const numbers = [3, -100, 45, 58, 73, 13, -17, -83, 52];

let positive = numbers.find(elem => elem > 0);
// console.log(positive);

let positiveArr = numbers.filter(elem => elem > 0);
// console.log(positiveArr);

// 3. Сформировать массив из положительных четных чисел
// => [58, 52]
let evenPositiveArr = numbers.filter(elem => elem > 0 && elem % 2 === 0);

// console.log(evenPositiveArr);

// 4. Найти первое положительное четное число
// => 58
let positiveEven = numbers.find(elem => elem > 0 && elem % 2 === 0);

// console.log(positiveEven);

// ОБЪЕКТЫ

// Пример объекта

const user = {
	id: 1,
	firstname: 'Nelli',
	lastname: 'Efremyan',
	age: 28,
	online: true,
	address: {
		city: 'Yerevan',
		country: 'Armenia',
	},
	languages: ['English', 'Russian'],
};
// console.log(user.firstname);
// console.log(user['firstname']);

// console.log(user.address.city);

// ПРАКТИКА

const users = [
	{
		id: 1,
		name: 'oleg',
		age: 23,
		online: true,
		address: {
			postcode: 1122,
			city: 'Berlin',
			country: 'Germany',
		},
	},
	{
		id: 2,
		name: 'Anna',
		age: 15,
		online: false,
		address: {
			postcode: 6097,
			city: 'Madrid',
			country: 'Spain',
		},
	},
	{
		id: 3,
		name: 'Olga',
		age: 45,
		online: true,
		address: {
			postcode: 7989,
			city: 'Barselona',
			country: 'Spain',
		},
	},
	{
		id: 4,
		name: 'Igor',
		age: 64,
		online: false,
		address: {
			postcode: 6609,
			city: 'Paris',
			country: 'France',
		},
	},
];

// 1. Сформировать массив совершеннолетних пользователей
// Вывести в консоль новый массив

let result = users.filter(elem => elem.age >= 18);
// console.log(result);

let resultSpain = users.filter(
	elem => elem.age >= 18 && elem.address.country == 'Spain'
);
// console.log(resultSpain);

let resultArr = users.map(
	elem =>
		`${elem.name} (${elem.age} years). Address: ${elem.address.city}, ${elem.address.country}`
);
// console.log(resultArr);

// 4. Сформировать массив из имен пользователей
// => ['Oleg', 'Anna', 'Olga', 'Igor']

// console.log(users.map(elem => elem.name));

// console.log(users.filter(elem => elem.name[0].toLowerCase() == 'o'));

// 6. Сформировать массив из имен совершеннолетних пользователей, которые сейчас в сети
// => ['oleg', 'Olga']
// console.log(
// 	users.filter(elem => elem.age >= 18 && elem.online).map(elem => elem.name)
// );

//reduce()

// const result1 = numbers.reduce(acc, el => acc + el, 0);

// const multiReduce = numbers.reduce((acc, el) => acc * el, 1);
// let result2 = 1;
// console.log(numbers.forEach(el => (result2 *= el)));

// console.log(multiReduce);
// console.log(result2);

// 7. Найти сумму возрастов пользователей
// => 147
// console.log(users.reduce((acc, el) => ((acc += el.age), acc), 0));
console.log(users.reduce((acc, el) => acc + el.age, 0));
