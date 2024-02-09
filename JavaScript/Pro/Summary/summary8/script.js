// 1. Написать функцию, которая принимает в качестве аргумента число (1 или 2) и отправляет get-запрос по ссылке https://reqres.in/api/users?page=X и выводит в консоль полученные по запросу данные

// function sendData(num) {
// 	let url = `https://reqres.in/api/users?page=${num}`;
// 	fetch(url)
// 		.then(res => res.json())
// 		.then(data => console.log(data));
// }

const container = document.querySelector('.cards_container');

const renderUsers = arr => {
	container.innerHTML = '';
	arr.forEach(elem => {
		let divCard = document.createElement('div');
		divCard.classList.add('card');

		let avatar = document.createElement('img');
		let userName = document.createElement('p');
		let email = document.createElement('a');

		avatar.src = elem.avatar;
		avatar.alt = `${elem.first_name} ${elem.lst_name}`;
		userName.innerText = `${elem.first_name} ${elem.lst_name}`;
		email.innerText = elem.email;
		email.href = `mailto:${elem.email}`;

		divCard.style.background =
			elem.first_name[0].toLowerCase() === 'e' ? 'lightgreen' : 'lightblue';

		divCard.append(avatar, userName, email);
		container.append(divCard);
	});
};

const sendData = num => {
	let url = `https://reqres.in/api/users?page=${num}`;
	fetch(url)
		.then(res => res.json())
		.then(json => renderUsers(json.data));
};

// const button1 = document.querySelector('.button1');
// const button2 = document.querySelector('.button2');

const [button1, button2] = document.querySelectorAll('.triggers div');

button1.addEventListener('click', () => sendData(1));
button2.addEventListener('click', () => sendData(2));

// 2. Написать функцию renderUsers(), которая примает массив с объектами и создает для каждого объекта карточку пользователя (автар, имя + фамилия, email кликабельный) и добавляет эти карточки в div.cards_container

// renderUsers(sendData(1));

// 3. Стилизовать карточки (border, border-radius, padding)

// 4. Стилизовать контейнер с карточками (грид на 3 колонки)
// 5. Если имя человека начинается на букву E/e, то цвет заднего фона сделать светло-зеленым, в ином случае - светло-голубой
