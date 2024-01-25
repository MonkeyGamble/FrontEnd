// let date = new Date();
// console.log(date);

// let date = new Date('2023-01-20 9:30:00 GMT');
// console.log(date);

// let date = new Date(2024, 1, 20, 9, 30);
// console.log(date);
// let date = new Date(0);
// console.log(date);

// Кол-во миллисекунд с 1970 года
// let date = new Date(245093483683462);
// console.log(date);

//Методы

//Текущий момент времени
// let date = new Date(); //- возвращает дату текущего момента времени
// let num = Date.now();  //возвращает кол-во пройденных миллисекунд после 1970 года

// console.log(num);

// //Получаем любой компонент даты
// let date = new Date('2024-01-20 9:30:00');
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());

// //день недели

// console.log(date.getDay());

// function getWeekDay() {
// 	let days = [
// 		'Sunday',
// 		'Monday',
// 		'Tuesday',
// 		'Wednesday',
// 		'Thursday',
// 		'Friday',
// 		'Saturday',
// 	];
// 	let curDate = new Date();
// 	console.log(`Today is ${days[curDate.getDay()]}`);
// }
// getWeekDay();

// let date = new Date('2024-01-20 9:30:00');
// console.log(date.getTime());
// console.log(Date.now());

// Задача 2.
// Определите количество ЧАСОВ которые прошли с 1970 года до текущего момента времени.
// Примечание: полученное значение округлите по правилам математики.
// let date = new Date();
// console.log(Math.round(date.getTime() / 1000 / 3600));

// let date = new Date('2000-01-01 0:00:00Z');
// console.log(Math.round((Date.now() - date.getTime()) / 1000 / 3600 / 24));

// Задача 4
// Напишите функцию checkYear(date), которая получает дату (объект) и проверяет, является ли год в дате високосным.
// Если да - функция должна вернуть true, в противном случае false
// примечание високосный год - это год который делится на 4 без остатка и кратны 400 и 100

function checkYear(date) {
	let year = date.getFullYear();
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
		? true
		: false;
}
let date = new Date();
console.log(checkYear(date));

function checkLeapYear(year) {
	let date = new Date(year, 1, 29);
	return date.getDate() === 29;
}
console.log(checkLeapYear(2000));
