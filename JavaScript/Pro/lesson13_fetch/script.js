// //Fetch

// // let url = 'https://jsonplaceholder.typicode.com/users';

// // fetch(url)
// // 	.then(res => res.json())
// // 	.then(data => {
// // 		let names = data.map(elem => elem.name);
// // 		console.log(names);
// // 	});

// // Задание 1
// // Реализуйте сетевой запрос по адресу
// // https://jsonplaceholder.typicode.com/todos
// // Получиче список выполненных задач в консоль.

// // let url = 'https://jsonplaceholder.typicode.com/todos';

// // fetch(url)
// // 	.then(res => res.json())
// // 	.then(data =>
// // 		console.log(data.filter(elem => elem.completed).map(elem => elem.title))
// // 	);

// //POST

// let post = {
// 	userId: 1,
// 	title: 'test',
// 	body: 'body test',
// };

// let url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url, {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json; charset=utf-8',
// 	},
// 	body: JSON.stringify(post),
// })
// 	.then(res => res.json())
// 	.then(data => console.log(data));

// let todo = {
// 	userId: 15,
// 	title: 'quo adipisci enim quam ut ab',
// 	completed: true,
// };

// let url2 = 'https://jsonplaceholder.typicode.com/todos';

// fetch(url2, {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json; charset=utf-8',
// 	},
// 	body: JSON.stringify(todo),
// })
// 	.then(res => res.json())
// 	.then(data => console.log(data));

// ---------------------------
// Задание 3
// Напишите функцию getUsers(), которая будет осуществлять запрос по адресу
// http://212.8.247.94:3050/users
// Полученный ответ выведите в косноль

function getUsers() {
	let url = 'http://212.8.247.94:3050/users';
	fetch(url)
		.then(res => res.json())
		.then(data => console.log(data));
}

getUsers();

// --------------------------
// Задание 4
// Напишите функцию createNewUser(obj), которая будет отправлять POST - запрос с данными нового
// пользователя. Сами данные необходимо передавать как аргумент в виде объекта
// http://212.8.247.94:3050/users/create

let user = {
	name: 'Kostiantyn',
	age: 44,
	salary: 4500,
	job_id: 'Graphic Designer',
};

function createNewUser(obj) {
	let url = 'http://212.8.247.94:3050/user/create';

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify(obj),
	})
		.then(res => res.json())
		.then(data => console.log(data));
}

// createNewUser(user);

//DELETE запрос

function deleteUserById(id) {
	let url = 'http://212.8.247.94:3050/users';

	fetch(url + `/${id}`, {
		method: 'DELETE',
	})
		.then(res => res.json())
		.then(data => console.log(data));
}

// deleteUserById(906);
// deleteUserById(921);

//PATCH - изменение данных

let url = 'http://212.8.247.94:3050/users/843';

// let newData = {
// 	name: 'Tigran',
// 	salary: 0,
// 	job_id: 'NONE',
// };

fetch(url, {
	method: 'PATCH',
	headers: {
		'Content-type': 'application/json',
	},
	body: JSON.stringify(newData),
});

// --------------------------------
// Задача 6

// Реализуйте функцию updateUser(obj, id) котоая будет осуществлять PATACH запрос
// с указанными данными в виде объекта, а также id.

function updateUser(obj, id) {
	let url = `http://212.8.247.94:3050/users/${id}`;
	fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(obj),
	})
		.then(res => res.json())
		.then(data => console.log(data));
}
