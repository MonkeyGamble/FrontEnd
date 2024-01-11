//DOM
//Document Object Model

//Селекторы:
// tag name
// class name
// id
// tagname>.class

// document.querySelector - возвращает первый элемент, который найдет

let paragraph = document.querySelector('p');

console.log(paragraph);

console.log(paragraph.innerHTML); //возвращает содержимое тэга

let paragraph3 = document.querySelector('.p3');

console.log(paragraph3);

let paragraph4 = document.querySelector('#p4');

console.log(paragraph4);

let paragraph5 = document.querySelector('.block1>p');

console.log(paragraph5);

paragraph5.innerText = 'New text';
paragraph5.innerHTML = '<span>Vasya</span>';
paragraph5.innerText = '<span>Vasya</span>';

let paragraph6 = document.querySelector('.p6');

console.log(paragraph6);
console.log(paragraph6.innerHTML);
console.log(paragraph6.innerText);

let paragraph7 = document.querySelector('.find');
paragraph7.innerText = 'Привет';

let paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[0]);

paragraphs[1].innerText = 'New paragraph';

for (let i = 0; i < paragraphs.length; i++) {
	console.log(paragraphs[i].innerText);
}

for (let element of paragraphs) {
	console.log(element);
	console.log(element.innerText);
}

let paragraphsAll = document.querySelectorAll('p');
for (let i = 0; i < paragraphsAll.length; i++) {
	paragraphsAll[i].innerText = 'привет';
}

// for (let i = 0; i < 3; i++) {
// 	paragraphsAll[i].innerText = prompt('enter the text:');
// }

for (let i = 0; i < paragraphsAll.length; i++) {
	if (i % 2 == 0) {
		paragraphsAll[i].innerText = 'я нечетный';
	} else {
		paragraphsAll[i].innerText = 'я четный';
	}
}

// / Задача: Написать скрипт, который находит параграфы и выводит (console) текстовое содержимое начная с 3 параграфа до 6(вкл).
for (let i = 2; i < 6; i++) {
	console.log(paragraphsAll[i].innerText);
}

let links = document.querySelectorAll('a');
console.log(links);
console.log(links.innerHTML);

// Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам меняет url на указанное значение.
let images = document.querySelectorAll('.main>img');
let url = 'https://www.google.com';
// for (let i = 0; i < 5; i++) {
// 	images[i].setAttribute('src', url);
// }

let i = 0;
for (img of images) {
	i++;
	if (i == 6) {
		break;
	}
	img.setAttribute('src', url);
}

// Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот массив необходим о
// вывести в консоль.

let links = document.querySelectorAll('a');
let linksArr = [];
