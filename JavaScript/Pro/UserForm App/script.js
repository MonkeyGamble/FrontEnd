let url = 'http://212.8.247.94:3050/users';
const add_form = document.querySelector('.add_form');
const remove_form = document.querySelector('.remove_form');

const edit_form = document.querySelector('.edit_form');

const usersWrapper = document.querySelector('.users_wrapper');

const getUsers = url => {
	fetch(url)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			render(data);
		});
};

const render = users => {
	usersWrapper.innerHTML = '';
	users.reverse();
	users.forEach(elem => {
		const userCard = document.createElement('div');
		userCard.classList.add('userCard');
		const userName = document.createElement('h2');
		userName.innerHTML = elem.name;
		const userAge = document.createElement('p');
		userAge.innerHTML = `<strong>age</strong>: ${elem.age}`;
		const userJob = document.createElement('p');
		userJob.innerHTML = `<strong>job</strong>: ${elem.job_id}; <strong>salary</strong>: ${elem.salary}`;
		const userId = document.createElement('p');
		userId.innerHTML = `<strong>id</strong>: ${elem.id}`;

		userCard.append(userName, userAge, userJob, userId);
		usersWrapper.append(userCard);
	});
};

const createNewUser = obj => {
	let url = 'http://212.8.247.94:3050/user/create';

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify(obj),
	})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			getUsers('http://212.8.247.94:3050/users');
		})
		.catch(e => console.log(e));
};

const editUser = obj => {
	let url = 'http://212.8.247.94:3050/users';
	fetch(url + `/${obj.id}`, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(obj),
	})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			getUsers('http://212.8.247.94:3050/users');
		})
		.catch(e => console.log(e));
};

const removeUser = id => {
	fetch(`http://212.8.247.94:3050/users/${id}`, {
		method: 'DELETE',
	})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			getUsers('http://212.8.247.94:3050/users');
		})
		.catch(e => console.log(e));
};

add_form.onsubmit = event => {
	event.preventDefault();
	let form_data = new FormData(event.target); //new FormData(add_form);
	let input_data = Object.fromEntries(form_data);
	createNewUser(input_data);
};

edit_form.onsubmit = event => {
	event.preventDefault();
	let form_data = new FormData(event.target);
	let input_data = Object.fromEntries(form_data);
	editUser(input_data);
};

remove_form.onsubmit = event => {
	event.preventDefault();
	let form_data = new FormData(event.target);
	let value_id = form_data.get('id');
	removeUser(+value_id);
};

getUsers(url);

//реализовать формы удаления и изменения
