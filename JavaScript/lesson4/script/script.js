// // let object = {};

// // let user = {
// // 	first_name: 'John',
// // 	last_name: 'Smith',
// // 	age: 20,
// // 	gender: 'Male',
// // };
// // console.log(user);

// // // user.isAdmin = true

// // // delete user.gender

// // // last_name in user  //true

// // for (let key in user) {
// // 	// console.log(key)   //выводит first_name, last_name, age, gender
// // 	console.log(user[key]); //выводит John, Smith, 20, Male
// // }

// // let salaries = {
// // 	John: 100,
// // 	Ann: 160,
// // 	Pete: 130,
// // };
// // let sum = 0;
// // for (let key in salaries) {
// // 	sum += salaries[key];
// // }
// // console.log(sum);

// // let menu = {
// // 	width: 200,
// // 	height: 300,
// // 	title: 'my menu',
// // };

// // for (let key in menu) {
// // 	if (typeof menu[key] == 'number') {
// // 		menu[key] *= 2;
// // 	}
// // }
// // console.log(menu);

// // let users = [
// // 	{
// // 		name: 'Bob',
// // 		surname: 'Brown',
// // 		age: 20,
// // 	},
// // 	{
// // 		name: 'John',
// // 		surname: 'Smith',
// // 		age: 18,
// // 	},
// // 	{
// // 		name: 'Tom',
// // 		surname: 'Hardy',
// // 		age: 48,
// // 	},
// // ];

// // console.log(users[1]);
// // console.log(users[1].name);

// // for (let i = 0; i < users.length; i++) {
// // 	// console.log(users[i]);
// // 	console.log(users[i].age);
// // }

// let arr = [
// 	{
// 		id: 1,
// 		title: 'bicycle',
// 		price: 45000,
// 		discount: 10,
// 	},
// 	{
// 		id: 2,
// 		title: 'roller-skates',
// 		price: 15000,
// 		discount: 5,
// 	},
// 	{
// 		id: 3,
// 		title: 'Kick scooter',
// 		price: 10000,
// 		discount: 30,
// 	},
// 	{
// 		id: 4,
// 		title: 'skis',
// 		price: 25000,
// 		discount: 20,
// 	},
// 	{
// 		id: 5,
// 		title: 'skate',
// 		price: 10000,
// 		discount: 0,
// 	},
// ];

// for (let i = 0; i < arr.length; i++) {
// 	// console.log(arr[i].title);
// 	// console.log(`${arr[i].title} (${arr[i].price})`);
// 	// console.log(`${arr[i].title} (${arr[i].price})`);
// 	if (arr[i].discount !== 0) {
// 		console.log(
// 			`${arr[i].title} (${arr[i].price * ((100 - arr[i].discount) / 100)})`
// 		);
// 	} else console.log(`${arr[i].title} (${arr[i].price})`);
// }

// function function_name (param1, param2) {
//   function body;
// }

// // function_name(arg1,arg2);

// let user_name = 'Tom';

// function showMessage() {
// 	let user_name = 'John'; //local variable  //приоритет локальных переменных фукнкции ВЫШЕ, чем у глобальных
// 	console.log(`Hello ${user_name}`);
// }

// showMessage();

// function showMessage(user) {
// 	console.log('hello ' + user);
// }

// showMessage('John');
// showMessage('Lilly');
// // showMessage(prompt('Enter your name:'));
// showMessage();  //undefined

// function showMessage(user = 'User name') {
// 	console.log('hello ' + user);
// }
// showMessage();
// showMessage('Anna');

// Параметр – это переменная, указанная в круглых скобках в объявлении функции.
// Аргумент – это значение, которое передаётся функции при её вызове.

// function getSum(a = 0, b = 0) {
// 	return a + b;
// }
// let result = getSum(2, 7);
// console.log(result);
// console.log(getSum(13, 5));

// function getSum1(num1, num2) {
// 	let sum = num1 + num2;
// 	return sum;
// }

// function getMax(num1, num2) {
// 	if (num1 > num2) {
// 		return num1;
// 	}
// 	return num2;
// }
// console.log(getMax(13, 7));

// Задача Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.
// function showEvenOrOdd() {
// 	let number = Number(prompt('enter the number:'));
// 	if (number % 2 === 0) {
// 		console.log('YES');
// 	} else console.log('NO');
// }

// showEvenOrOdd();

// Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1,
//  если первое число меньше, чем второе, и 0, если числа равны.

// function getCheckParity(num1, num2) {
// 	if (num1 > num2) {
// 		return 1;
// 	} else if (num2 > num1) {
// 		return -1;
// 	}
// 	return 0;
// }

// console.log(getCheckParity(3, 3));
// console.log(getCheckParity(3, 4));
// console.log(getCheckParity(4, 3));

// function getArray(n) {
// 	let newArray = [];
// 	for (let i = 0; i <= n; i++) {
// 		newArray.push(i);
// 	}
// 	return newArray;
// // }

// // console.log(getArray(10));

// // Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.

// function getArray2(a, b) {
// 	let max;
// 	let min;
// 	let newArray = [];
// 	if (a > b) {
// 		max = a;
// 		min = b;
// 	} else if (b > a) {
// 		max = b;
// 		min = a;
// 	} else {
// 		return 0;
// 	}
// 	for (let i = max; i >= min; i--) {
// 		newArray.push(i);
// 	}
// 	return newArray;
// }

// function getArray3(a, b) {
// 	let newArray = [];
// 	if (a > b) {
// 		for (let i = a; i >= b; i--) {
// 			newArray.push(i);
// 		}
// 	} else if (b > a) {
// 		for (let i = b; i >= a; i--) {
// 			newArray.push(i);
// 		}
// 	} else {
// 		return 0;
// 	}
// 	return newArray;
// }

// console.log(getArray2(4, 20));
// console.log(getArray2(13, 5));
// console.log(getArray2(6, 6));
// console.log(getArray2(5, 6));

// console.log(getArray3(4, 20));
// console.log(getArray3(13, 5));
// console.log(getArray3(6, 6));
// console.log(getArray3(5, 6));

function checkLength(word) {
	if (word.length < 5) {
		console.log(`"${word}" is a short word`);
	} else console.log(`"${word}" is a long word`);
}

checkLength('Hi');
checkLength('Hello');
