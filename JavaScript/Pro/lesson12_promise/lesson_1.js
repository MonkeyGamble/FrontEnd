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

new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('generate array code 1');
		let a = [1, 2, 3, 4];
		resolve(a);
	}, Math.random() * 100);
})
	.then(a => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log('code 2');
				a.push(5);
				resolve(a);
			}, Math.random() * 1000);
		});
	})
	.then(a => {
		console.log(a, 'finish code 3');
	});
