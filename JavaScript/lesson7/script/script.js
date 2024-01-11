// let block = document.createElement('div');
// block.innerText = 'Block0';
// document.body.prepend(block);

// let paragraph = document.querySelector('.p1');
// paragraph.removeAttribute('style');

// let div1;
// for (let i = 1; i < 6; i++) {
// 	div1 = document.createElement('div');
// 	div1.innerText = `Block${i}`;
// 	document.body.prepend(div1);
// }
// paragraph.after(div1); //работает только последняя вставка

// let block1 = document.createElement('p');
// block1.classList.add('p2');
// block1.innerText = 'Hello!';
// document.body.append(block1);

// let paragraph1 = document.createElement('p');
// paragraph1.innerText = 'ParagrPH';
// let root_div = document.querySelector('#root');
// root_div.append(paragraph1);

// Напишите скрипт для создания списка.(все через JS)
// Для каждого пункта:
// Запрашивайте содержимое пункта (тега <li>) у пользователя с помощью prompt 10 раз.
// Создавайте элементы <li> и добавляйте его к <ul>.
// let list = document.createElement('ul');

// for (let i = 0; i < 10; i++) {
// 	let listItem = document.createElement('li');
// 	listItem.innerText = prompt(`enter the text for ${i + 1}: `);
// 	list.append(listItem);
// }
// document.body.append(list);

// for (let i = 0; i < 20; i++) {
// 	let par = document.createElement('p');
// 	par.innerText = `${i}`;
// 	document.body.append(par);
// }

// Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в #root

// let array = [
// 	'Consectetur',
// 	'ut',
// 	'nostrum',
// 	'provident',
// 	'molestiae',
// 	'id',
// 	'minima',
// 	'assumenda',
// 	'unde',
// 	'adipisci',
// ];

// for (let i = 0; i < array.length; i++) {
// 	let par = document.createElement('p');
// 	par.innerHTML = array[i];
// 	document.querySelector('#root').append(par);
// }

// let links = document.querySelectorAll('a');
// for (let link of links) {
// 	link.remove();
// }

// // Создайте новый элемент <li>, добавьте ему текст и вставьте его в начало списка с id "myList".

// let newLi = document.createElement('li');
// newLi.innerText = 'Elem0';
// document.querySelector('#myList').prepend(newLi);

// Написать программу,которая запрашивает у пользователя картинку и ссылку на статью (любую)
// и формирует в интерфейсе картинку и внизу ссылку,указанную пользователем.

// let imageSrc = prompt('enter the image and URL');
// let aHref = prompt('enter the link URL');

// let imgElem = document.createElement('img');
// imgElem.setAttribute('src', imageSrc);
// imgElem.setAttribute('alt', 'Post image');

// document.body.append(imgElem);

// let aElem = document.createElement('a');
// aElem.setAttribute('href', aHref);
// aElem.setAttribute('target', '_blank');
// aElem.innerText = 'Post Link';

// document.body.append(aElem);

// Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в #links.
// {/* <a href="https://facebook.com" target="_blank">facebook</a>
// <a href="https://youtube.com" target="_blank">youtube</a>
// <a href="https://google.com" target="_blank">google</a>
// <a href="https://github.com" target="_blank">github</a> */}

let arr = [
	{
		link: 'https://facebook.com',
		title: 'facebook',
	},
	{
		link: 'https://youtube.com',
		title: 'youtube',
	},
	{
		link: 'https://google.com',
		title: 'google',
	},
	{
		link: 'https://github.com',
		title: 'github',
	},
];

// let divLinks = document.querySelector('#links');

// for (let i = 0; i < arr.length; i++) {
// 	// console.log(arr[i].link);
// 	// console.log(arr[i].title);
// 	let linkElem = document.createElement('a');
// 	linkElem.setAttribute('href', arr[i].link);
// 	linkElem.setAttribute('target', '_blank');
// 	linkElem.innerText = arr[i].title;
// 	divLinks.append(linkElem);
// }

// Рассматриваем кейс,в котором создается div с картинкой и ссылкой внутри. Создаемф ункцию,которая получает ссылку на картинку и ссылку на сайт и возвращает элемент.

function createBlockWithImage(imgSrc, aHref) {
	let block = document.createElement('div');

	let imgElem = document.createElement('img');
	imgElem.setAttribute('src', imgSrc);
	imgElem.setAttribute('alt', 'Post Image');

	let srcElem = document.createElement('a');
	srcElem.setAttribute('href', aHref);
	srcElem.setAttribute('target', '_blank');
	srcElem.innerText = 'Click me';

	block.append(imgElem, srcElem);

	return block;
}

let imgSrc =
	'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1600';

let aHref = 'https://www.pexels.com/search/4k%20wallpaper/';

let newDiv = createBlockWithImage(imgSrc, aHref);

document.body.append(newDiv);
