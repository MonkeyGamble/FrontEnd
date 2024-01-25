// let numbers = {
// 	num1: 50,
// 	num2: 150,
// 	num3: 30,
// 	num4: 45,
// 	num5: 35,
// };
// let sum = 0;
// for (let key in numbers) {
// 	console.log(key, numbers[key]);
// 	sum += numbers[key];
// }
// console.log(sum);

// let obj1 = {
// 	name: 'Alex',
// 	lastname: 'William',
// };

// let obj2 = {
// 	name: 'Steven',
// 	age: 30,
// };

// let obj3 = {
// 	job: true,
// };

// // let obj4 = Object.assign(obj1, obj2, obj3);

// // console.log(obj1);
// // console.log(obj2);
// // console.log(obj3);
// // console.log(obj4);

// let copyObj = Object.assign({}, obj1);

// console.log(copyObj);
// console.log(obj1 === copyObj);

// Задан объект someObj с произвольными сво-ми.
// Напишите функцию getKeys(obj), которая в качестве аргумента получает
// объект и возвращает результат согласно примеру ниже:
// Результат: ['key1','key2','key3','key4']

// let obj = {
// 	key1: 'value1',
// 	key2: 'value2',
// 	key3: 'value3',
// 	key4: 'value4',
// };

// function someObj(obj) {
// 	let result = [];
// 	for (let key in obj) {
// 		result.push(key);
// 	}
// 	return result;
// }

// console.log(someObj(obj));

// --------------------------
// Task 3
// Задан массив array, передающий произвольное количество элементов.
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

// let array = [1, true, '3', 'value1', 9, 'key'];

// Результат:
// {
//     key1: 1,
//     key2: true,
//     key3: ‘3’,
//     key4: ‘value1’
//     key5: 9,
//     key6: ‘key’
// }

// function makeObj(arr) {
// 	let obj = {};
// 	for (let i = 0; i < arr.length; i++) {
// 		obj[`key${i}`] = arr[i];
// 	}
// 	return obj;
// }
// console.log(makeObj(array));

let btn_init = document.querySelector('.btn_init');

// btn_init.onclick = () => {
// 	if (localStorage.getItem('init') === '1') {
// 		localStorage.setItem('init', 0);
// 	} else localStorage.setItem('init', 1);
// };

btn_init.onclick = () => {
	let initStorage = localStorage.getItem('init');
	localStorage.setItem('init', initStorage === '1' ? '0' : '1');
};

// Task 2
// Реализовать кнопку, которая будет выводить в консоль значение input элемента
// При нажатии на кнопку значение поля ввода должно сохраняться в localStorage.
// 3) К прошлому примеру добавить кнопку, которая считывает значение из localStorage и помещает в поле ввода.

let form_inp = document.querySelector('.form_inp');
let submit_btn = document.querySelector('.submit_btn');
let ls_btn = document.querySelector('.ls_btn');

submit_btn.onclick = () => {
	localStorage.setItem('form_inp', form_inp.value);
	form_inp.value = '';
};
ls_btn.onclick = () => {
	form_inp.value = localStorage.getItem('form_inp');
};

// Создать каунтер.
// Страница с двумя кнопками “+” и “-” и при нажатии на какую-либо число должно
// меняться в соответствующую сторону. Значение counter не должно слетать
// при перезагрузке страницы.

// let counter = localStorage.getItem('counter') || 0;
// let counter = localStorage.getItem('counter') ?? 0;   //оператор нулевого слияния

let minus_btn = document.querySelector('.minus_btn');
let plus_btn = document.querySelector('.plus_btn');
let parCounter = document.querySelector('.counter');

let counter = localStorage.getItem('counter')
	? +localStorage.getItem('counter')
	: 0;
parCounter.innerText = counter;

minus_btn.onclick = () => {
	counter--;
	parCounter.innerText = counter;
	localStorage.setItem('counter', counter);
};
plus_btn.onclick = () => {
	counter++;
	parCounter.innerText = counter;
	localStorage.setItem('counter', counter);
};
