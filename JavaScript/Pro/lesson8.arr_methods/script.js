// let fruits = ['яблоко', 'вишня', 'Арбуз', 'мандарин', 'тыква'];

// console.log(fruits.filter(elem => elem.toLowerCase().includes('а')));

// console.log(fruits.filter(elem => elem.length <= 5));

// console.log(fruits.filter((elem, ind) => console.log(elem, ind, fruits)));

// let numbers = [5, 3, 7, 2, 8, 9, 10, 11, 51];

// console.log(numbers.filter((elem, ind) => elem % 2 === 0 && ind % 2 === 0));

// let users = [
// 	{ id: 1, age: 30, name: 'Alex' },
// 	{ id: 2, age: 20, name: 'Steven' },
// 	{ id: 3, age: 40, name: 'Neena' },
// 	{ id: 4, age: 50, name: 'John' },
// 	{ id: 5, age: 30, name: 'Grend' },
// ];

// console.log(users.filter(elem => elem.age >= 30 && elem.age <= 40));

// let array = [10, 20, 30, 40, 50];

// let result = array.find(elem => elem > 15);
// let result1 = array.filter(elem => elem > 15);
// let result2 = array.findIndex(elem => elem > 15);

// // console.log(result);
// // console.log(result1);
// // console.log(result2);

// // let someResult = array.some(elem => elem > 40);
// let everyResult = array.every(elem => elem > 0);

// // // console.log(someResult);
// // console.log(everyResult);

// let array = [1, 2, 3, 4, 5];

// let result = array.map(elem => elem ** 2);
// let result2 = array.map(elem => 100);

// console.log(result);
// console.log(result2);

// let array2 = ['Alex', 'Steven', 'Neean'];
// let result3 = array2.map(elem => elem[0]);

// console.log(result3);

// В магизине объявлена распродажа. Стоимость всех продуктов теперь указано с 15% скидкой
// // Сформируйте новый массив, который будет хранить новую стоимость с учетом указанной скидки
// let numbers = [100, 450, 600, 200, 1000, 4000];
// let result = numbers.map(elem => elem * 0.85);

// console.log(result);

// Выведите булевые типы которые ответят на вопросы:
// 1) Есть ли в массиве хотябы 1 элемент, который начинается на 'в'
// 2) Все ли элементы массива содержат букву 'а'?
// let fruits = ['яблоко', 'вишня', 'арбуз', 'мандарин', 'тыква'];
// console.log(fruits.some(elem => elem.startsWith('в')));
// console.log(fruits.every(elem => elem.includes('а')));

// let names = [
// 	{ first_name: 'Steven', last_name: 'King' },
// 	{ first_name: 'Alex', last_name: 'Willyam' },
// 	{ first_name: 'John', last_name: 'Grec' },
// 	{ first_name: 'Neena', last_name: 'Palman' },
// ];
// console.log(names.map(elem => `${elem.first_name[0]}.${elem.last_name[0]}`));

//сортировка строкового типа

// let fruits = ['яблоко', 'вишня', 'арбуз', 'мандарин', 'тыква'];

// console.log(fruits.sort().reverse());

//сортировка числовых значений

// let array = [3, 4, 2, 5, 1, 10, 8, 6, 9, 7];
// array.sort((nxElem, curElem) => {
// 	if (nxElem > curElem) return 1;
// 	if (nxElem < curElem) return -1;
// 	if (nxElem === curElem) return 0;
// });

// array.sort((nxElem, curElem) => nxElem - curElem);

// console.log(array);
// let users = [
// 	{ id: 4, age: 30, name: 'Alex' },
// 	{ id: 5, age: 20, name: 'Steven' },
// 	{ id: 2, age: 40, name: 'Neena' },
// 	{ id: 1, age: 50, name: 'John' },
// 	{ id: 3, age: 30, name: 'Grend' },
// ];
// users.sort((a, b) => b.id - a.id);

// console.log(users);
// let fruits = ['Яблоко', 'Вишня', 'Арбуз', 'Мандарин', 'Тыква'];
// Найдите индекс элемента массива, длина которого будет равна 6

// console.log(fruits.findIndex(elem => elem.length === 6));

// let array = [1, 2, 3, 4, 5];

// //посчитать сумму значений массива

// // let sum = 0;

// // for (let elem of array) {
// // 	sum += elem;
// // }
// // console.log(sum);

// // let sum = array.reduce((accum, elem) => accum + elem);
// // let sum2 = array.reduce((accum, elem) => accum + elem / array.length, 0); //0 - стартовое значение
// // console.log(sum, sum2);

// // let numbers = [3, 3, 3, 3, 4];
// // let sum = numbers.reduce((accum, elem) => accum + elem, 0);
// // let multi = numbers.reduce((accum, elem) => accum * elem, 1);

// // console.log(sum, multi);

// let users = [
// 	{ id: 4, age: 30, name: 'Alex' },
// 	{ id: 5, age: 20, name: 'Steven' },
// 	{ id: 2, age: 40, name: 'Neena' },
// 	{ id: 1, age: 50, name: 'John' },
// 	{ id: 3, age: 30, name: 'Grend' },
// ];

// // 1. Посчитайте сумму всех возрастов
// let ageSum = users.reduce((accum, elem) => accum + elem.age, 0);
// console.log(ageSum);

// let averageAge = users.reduce(
// 	(accum, elem) => accum + elem.age / users.length,
// 	0
// );
// console.log(averageAge);

// let array = [1, 2, 3, 4, 5];

// console.log(array);
// console.log(...array);

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let arr = [10, 20, 30, 40, 50, 60];
// let [a, b, c, ...d] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// let arr = [10, 20, 30, 40, 50, 60];
// let [a, b, c, ...d] = arr;
// console.log(d);

// let arr = [10, 20, 30, 40, 50, 60];
// let [a, b, c, ...d] = arr.reverse();
// console.log(d);

// function handle(...arg) {
// 	console.log(arg);
// }

// handle(1, 2, 3);

// function handle2(a, ...arg) {
// 	console.log(a);
// 	console.log(arg);
// }

// handle2(1, 2, 3);

// function getSum(...arg) {
// 	let sum = arg.reduce((accum, elem) => accum + elem, 0);
// 	console.log(sum);
// }

// getSum(1, 2);
// getSum(1, 2, 3);

let obj = {
	name: 'Alex',
	age: 40,
};

// let { name, age } = obj;

// console.log(name);
// console.log(age);

// console.log({ ...obj, age: 50 });
console.log({ ...obj });
