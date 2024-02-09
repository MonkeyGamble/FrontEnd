// let a = 10;

// setTimeout(() => {
// 	a = 30;
// 	console.log(a);
// }, 3000);
// console.log(a);

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve((a = 30));
// 	}, 3000);
// });
// promise.then(() => console.log(a));

// console.log(a);

fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.json())

	.then(json => renderUsers(json))
	.catch(error => console.error('Error fetching users:', error));

// 1. Написать функцию renderUsers(), которая принимает массив с объектами в качестве аргумента и для каждого объекта массива создает див с двумя параграфами (name и username пользователя)
// 4. В карточку пользователя добавить его почту и сделать ее кликабельной. (a, mailto)

function renderUsers(users) {
	let usersContainer = document.querySelector('.users_container');

	users.forEach(elem => {
		const userCard = document.createElement('div');
		userCard.classList.add('user_card');

		const name = document.createElement('p');
		name.innerText = `name: ${elem.name}`;
		userCard.style.background =
			elem.name[0].toUpperCase() === 'C' ? 'orange' : 'initial';

		const userName = document.createElement('p');
		userName.innerText = `username: ${elem.username}`;

		const email = document.createElement('a');
		const emailWord = document.createElement('span');
		emailWord.innerText = 'email:  ';
		email.innerText = elem.email;
		email.href = `mailto:${elem.email}`;

		userCard.addEventListener('click', () => {
			userCard.style.background = 'lightpink';
		});
		userCard.addEventListener('mouseout', () => {
			userCard.style.background =
				elem.name[0].toUpperCase() === 'C' ? 'orange' : 'initial';
		});

		userCard.append(name, userName, emailWord, email);
		usersContainer.append(userCard);
	});
}
