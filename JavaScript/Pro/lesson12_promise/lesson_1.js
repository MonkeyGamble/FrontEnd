//Асинхронный код - код, которому требуется время на выполнение
//JS фактически не дожидается выполнения асинхронного фрагмента кода

// setTimeout(() => {
// 	console.log(1);
// 	let a = [1, 2, 3, 4];
// }, 3000);
// console.log(2);
// console.log(3);

// setTimeout(() => {

// 	console.log('code 1');

// 	setTimeout(() => {
// 		console.log('code 2');
// 	}, Math.random() * 1000);

// }, Math.random() * 1000);

//PROMISE

// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('generate array code 1');
// 		let a = [1, 2, 3, 4];
// 		resolve(a);
// 	}, Math.random() * 100);
// });

// promise
// 	.then(a => {
// 		console.log(a, 'code 2');
// 		a.push(5);
// 		return a;
// 	})
// 	.then(a => {
// 		console.log(a, 'change array (code 3)');
// 	});

// new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('generate array code 1');
// 		let a = [1, 2, 3, 4];
// 		resolve(a);
// 	}, Math.random() * 100);
// })
// 	.then(a => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				console.log('code 2');
// 				a.push(5);
// 				resolve(a);
// 			}, Math.random() * 1000);
// 		});
// 	})
// 	.then(a => {
// 		console.log(a, 'finish code 3');
// 	});

//catch

// new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('code 1');
// 		// reject();
// 		resolve();
// 	}, Math.random() * 100);
// })
// 	.then(() => console.log('code 2'))
// 	.catch(() => console.log('rejected'));

// --------------------------------------------------------------------
// Задание 1.
// Задан фрагмент асинхронного кода, который спустя 0.4 секунд
// формирует массив.
// Необходимо реализовать процесс, который дождется выполнения
// асихнронного кода и выведет сумму всех элементов массива
// Примечание: расчет суммы внутри задержки делать нельзя

// setTimeout(() => {
//     let array = [1,2,3,4,5]
// }, 400)

// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		let array = [1, 2, 3, 4, 5];
// 		resolve(array);
// 	}, 400);
// }).then(array => {
// 	let sum = array.reduce((accum, elem) => accum + elem, 0);
// 	console.log(sum);
// });

// -----------------------------------------------------------------------------------
// Задание 2.
// Задан фрагмент асинхронного кода, который спустя 0.5 секунд
// рандомным образом создает переменную number. Релизуйте процесс, который
// в случае если число окажется нечетным - вернет текст ошибки 'error'.
// Если число окажется четным - тогда значение квадрата этого рандомного числа
// Примечание: Логи внутри задержки делать нельзя

let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let number = Math.round(Math.random() * 10);
		if (number % 2 === 0) {
			resolve(number);
		} else {
			reject('error');
		}
	}, 500);
});
promise
	.then(number => {
		console.log(number);
		console.log(number ** 2);
	})
	.catch(e => console.log(e))
	.finally(() => console.log('finnaly!'));
