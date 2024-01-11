// // //function decalration
// // function sayHi1() {
// // 	console.log('Hello');
// // }

// // // function expression  функциональное выражение

// // let sayHi2 = function () {
// // 	console.log('Hello');
// // };

// // sayHi1();
// // sayHi2();

// // console.log(getMax(2, 6));
// // // console.log(getMax1(3, 7));

// // function getMax(a, b) {
// // 	if (a > b) {
// // 		return a;
// // 	}
// // 	return b;
// // }

// // let getMax1 = function (a, b) {
// // // 	if (a > b) {
// // // 		return a;
// // // 	}
// // // 	return b;
// // // };

// // // console.log(getMax1(3, 7));

// // // function showSum(a, b) {
// // // 	console.log(a + b);
// // // }

// // // // let num1 = 5;
// // // // let num2 = num1;

// // // let function1 = showSum;

// // // showSum(5, 3);
// // // function1(5, 3);

// // // //стрелочные функции

// // // function getSum1(a, b) {
// // // 	return a + b;
// // // }

// // // let getSum2 = (a, b) => a + b;

// // // console.log(getSum1(3, 6));
// // // console.log(getSum2(3, 6));

// // // let pow = n => n * 2;

// // // let sayHi3 = () => 'Hello';

// // //функция внутри функции

// // // function getMax2(a, b) {
// // // 	if (a > b) {
// // // 		return a;
// // // 	}
// // // 	return b;
// // // }

// // // function showMax(a, b) {
// // // 	console.log(getMax2(a, b));
// // // }

// // // showMax(20, 100);

// // // function getArraySum(array = []) {
// // // 	if (array.length == 0) {
// // // 		return 0;
// // // 	}
// // // 	let sum = 0;
// // // 	for (let i = 0; i < array.length; i++) {
// // // 		sum += array[i];
// // // 	}
// // // 	return sum;
// // // }

// // // let numbers = [3, 6, 2, -1, 0, 4];
// // // console.log(getArraySum());
// // // console.log(getArraySum(numbers));
// // // console.log(getArraySum([20, 4, 0, 10]));

// // console.log([] == []); //всегда false

// // // Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

// // function getEvenArray(arr = []) {
// // 	if (arr.length == 0) return 0;
// // 	let resultArr = [];
// // 	for (let i = 0; i < arr.length; i++) {
// // 		if (arr[i] % 2 === 0) {
// // 			resultArr.push(arr[i]);
// // 		}
// // 	}
// // 	return resultArr;
// // }
// // console.log(getEvenArray([2, 5, 7, 6, 8, 13, 24, 32]));

// // // Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа больше определенного порога(N).

// // function getNewArray1(arr = [], n = 0) {
// // 	if (arr.length == 0) return 0;
// // 	let resultArr = [];
// // 	for (let i = 0; i < arr.length; i++) {
// // 		if (arr[i] > n) {
// // 			resultArr.push(arr[i]);
// // 		}
// // 	}
// // 	return resultArr;
// // }

// // console.log(getNewArray1([2, 5, 7, 6, 8, 13, 24, 32], 6));

// // // Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает
// // // объект со свойствами min, max, avg с соответствующими значениями по массиву.

// // function getObj(array = []) {
// // 	if (array.length == 0) return 0;

// // 	let min = array[0];
// // 	let max = array[0];
// // 	let sum = array[0];
// // 	let avg;

// // 	for (let i = 1; i < array.length; i++) {
// // 		if (array[i] < min) {
// // 			min = array[i];
// // 		}
// // 		if (array[i] > max) {
// // 			max = array[i];
// // 		}
// // 		sum += array[i];
// // 	}
// // 	avg = sum / array.length;
// // 	return {
// // 		min,
// // 		max,
// // 		avg,
// // 	};
// // }

// // console.log(getObj([2, 5, 7, 6, 8, 13, 24, 32]));

// // У нас есть следующий объект:
// // Проверьте, что в объекте есть ключ age.

// let user = {
// 	name: 'John',
// 	age: 30,
// };

// console.log('age' in user);

// // Создать объект product с названием(product_name) и ценой(product_price) продукта и выведите данные в консоль.

// let product = {
// 	product_name: 'iPhone',
// 	product_price: 1000,
// };
// console.log(product.product_name);
// console.log(product.product_price);

// // Добавить в объект product свойства product_quantity и product_quality.

// product.product_quantity = 4;
// product.product_quality = 'best';

// console.log(product);

// // Удалить свойство product_quality из объекта product.

// delete product.product_quality;

// console.log(product);

// Создайте объект с различными свойствами (строки, числа, булевы значения).

let Obj = {
	strings: 'Hello world!',
	numbers: 123,
	quantity: 13,
	booleans: true,
};
// Напишите функцию, которая выводит все ключи объекта.

function getObjKeys(obj = {}) {
	for (let key in obj) {
		console.log(key);
	}
}
getObjKeys(Obj);
// Напишите функцию, которая выводит все значения объекта.

function getPropObj(obj = {}) {
	for (let key in obj) {
		console.log(obj[key]);
	}
}
getPropObj(Obj);

// Напишите функцию, которая определяет количество свойств в объекте.

function getNumberKeyObj(obj = {}) {
	let sum = 0;
	for (let key in obj) {
		sum++;
	}
	return sum;
}
console.log(getNumberKeyObj(Obj));

// Напишите функцию, которая определяет количество числовых значений в объекте.

function calcNumberObj(obj = {}) {
	let sum = 0;
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			sum++;
		}
	}
	return sum;
}

console.log(calcNumberObj(Obj));

//Дан массив:
[1, '', 2, 3, '', 5];
// Удалите из массива все пустые строки.

let arr = [1, '', '', 2, 3, '', 5];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] === '') {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

function getArray(numbers1) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '') {
			arr.splice(i, 1);
			i--;
		}
	}
	return numbers1;
}
console.log(getArray(arr));
