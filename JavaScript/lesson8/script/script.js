// // //callback-function
// // function printHello(username) {
// // 	console.log(`Hello ${username}`);
// // }
// // function printBye(username) {
// // 	console.log(`Bye ${username}`);
// // }
// // function ask(username) {
// // 	console.log(`How are you, ${username}?`);
// // }
// // function dosmthwithUsername(username, callback) {
// // 	callback(username);
// // }

// // dosmthwithUsername('John', printHello);
// // dosmthwithUsername('John', ask);
// // dosmthwithUsername('John', printBye);

// // // Написать функцию forEach, которая принимает в качестве первого аргумента массив,
// // // а в  качестве второго функцию и вызывает принятую функцию для каждого элемента массива.

// // let array = [1, 34, 25, 17, 88, 2, 4];

// // let printArray = elem => console.log(elem);

// // let printElemPow = elem => console.log(elem ** 2);

// // function printEvenElem(elem) {
// // 	if (elem % 2 == 0) {
// // 		console.log(elem);
// // 	}
// // }

// // function forEach(array, callback) {
// // 	for (let i = 0; i < array.length; i++) {
// // 		callback(array[i]);
// // 	}
// // }

// // forEach(array, printArray);
// // forEach(array, printElemPow);
// // forEach(array, printEvenElem);

// // // function first() {
// // // 	setTimeout(() => {
// // // 		console.log(1);
// // // 	}, 500); //ms
// // // }

// // // function second() {
// // // 	console.log(2);
// // // }

// // // first();
// // // second();

// // function first(callback) {
// // 	setTimeout(() => {
// // 		console.log(1);
// // 		callback();
// // 	}, 500); //ms
// // }

// // function second() {
// // 	console.log(2);
// // }

// // first(second);

// //При нажатии на параграф, выводить в консоль текст параграфа

// let paragraph = document.querySelector('.p1');

// // paragraph.addEventListener('click', function () {
// // 	console.log(paragraph.innerText);
// // });

// paragraph.addEventListener('click', showText);

// function showText() {
// 	console.log(paragraph.innerText);
// }

// Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка “Hello world”.

// let button = document.querySelector('.btn1');

// // button.addEventListener('click', printHello);
// button.addEventListener('mouseover', printHello);

// function printHello() {
// 	console.log('Hello world!');
// }

// Переделать кнопку таким образом, чтобы при нажатии на  нее в параграфе в интерфейсе значение увеличивалось на 1.
// В начале рассмотрите процесс, при котором мы каждый раз  считываем число из параграфа, меняем и записываем  обратно.

// let prgph = document.querySelector('.p2');

// button.addEventListener('click', raiseMe);

// function raiseMe() {
// 	prgph.innerText = parseInt(prgph.innerText, 10) + 1;
// }

// // а потом переделайте процесс так, чтобы значение  хранилось в переменной, изменялось при клике и  записывалось в параграф.

// let num = 2;

// button.addEventListener('contextmenu', raiseMeRight);

// // function raiseMeRight() {
// // 	prgph.innerText = ++num;
// // }

// // let button = document.querySelector('.btn1');
// // let prgph = document.querySelector('.p2');

// // button.addEventListener('click', function () {
// // 	console.log(prgph.innerText);
// // });

// // button.addEventListener('click', function () {
// // 	prgph.innerText = 'New text';
// // });

// // Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на первую выводится в консоль “минус”, а при нажатии на вторую ‘плюс’.
// // Задание2: Доработать процесс таким образом, чтобы при нажатии на плюс в консоль выводилось число, увеличившись на 1, а при нажатии на минус уменьшившись на 1. Для решения этой задачи понадобится создать переменную и изменять ее при нажатии на ту или иную кнопку.
// // Задание3: Попробовать так же изменить значение параграфа

// let number = 5;

// let button1 = document.createElement('button');
// let button2 = document.createElement('button');
// button1.innerText = 'Minus';
// button2.innerText = 'Plus';

// document.body.append(button1, button2);

// let paragraph = document.querySelector('.p2');

// button1.addEventListener('click', function () {
// 	// console.log(--number);
// 	paragraph.innerText = Number(paragraph.innerText) - 1;
// });

// button2.addEventListener('click', function () {
// 	// console.log(++number);
// 	paragraph.innerText = Number(paragraph.innerText) + 1;
// });

// //удаление события

// let button = document.querySelector('.btn1');

// button.addEventListener('click', clickMe);

// function clickMe() {
// 	console.log('Hello!');
// }

// button.removeEventListener('click', clickMe);

// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки => *****

// let str_array = ['John', 'Tom', 'Mary', 'Carry'];

// for (let i = 0; i < str_array.length; i++) {
// 	let pElem = document.createElement('p');
// 	pElem.innerText = str_array[i];
// 	document.body.append(pElem);
// 	pElem.addEventListener('click', function () {
// 		pElem.innerText = '*****';
// 	});
// }

// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.

// let paragraph = document.querySelector('.p2');
// paragraph.addEventListener('click', POWme);
// function POWme() {
// 	let inText = Number(paragraph.innerText);
// 	paragraph.innerText = inText ** 2;
// }

// Даны абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.
// let paragraph = document.querySelectorAll('.num');
// let button = document.querySelector('.btn1');

// button.addEventListener('click', getSum);

// function getSum() {
//   let sum = 0;
// 	for (let i = 0; i < paragraph.length; i++) {
// 		sum += Number(paragraph[i].innerText);
// 	}
// 	let sumPar = document.createElement('p');
// 	sumPar.classList.add('sum');
// 	sumPar.innerText = `Сумма значений всех параграфов = ${sum}`;
// 	let lastPar = paragraph[paragraph.length - 1];
// 	// document.body.append(sumPar);
// 	lastPar.insertAdjacentElement('afterend', sumPar);
// }

// Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.

// let paragraph = document.querySelector('.p2');
// let button = document.querySelector('.btn1');

// button.addEventListener('click', getSum100);

// function getSum100() {
// 	let sum = 0;
// 	for (let i = 0; i <= 100; i++) {
// 		sum += i;
// 	}
// 	paragraph.innerText = `Сумма чисел от 1 до 100 = ${sum}`;
// }

// let div = document.querySelector('.count');
// let paragraphs = document.querySelectorAll('.num1');
// let button = document.querySelector('.btn2');

// button.addEventListener('click', function () {
// 	div.innerText = paragraphs.length;
// });

// // Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.
// let paragraphs = document.querySelectorAll('.p3');
// let button = document.querySelector('.btn3');

// button.addEventListener('click', printNum);

// function printNum() {
// 	for (let i = 0; i < paragraphs.length; i++) {
// 		paragraphs[i].innerText = i + 1;
// 	}
// }

// Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.

// let button = document.querySelector('.btn4');
// let paragraph = document.querySelector('.p4');
// let link = document.querySelector('a');
// let href = link.getAttribute('href');

// button.addEventListener('click', link2Par);

// function link2Par() {
// 	paragraph.innerText = href;
// }
// Даны ссылки и кнопка. По нажатию на кнопку получите массив значений атрибута href ссылок и выведите в консоль.

// let button = document.querySelector('.btn4');
// let href = document.querySelectorAll('.a1');

// let array = [];

// button.addEventListener('click', hrefArr);

// function hrefArr() {
// 	for (let i = 0; i < href.length; i++) {
// 		array[i] = href[i].getAttribute('href');
// 	}
// 	console.log(array);
// }

// let button6 = document.createElement('button');
// button6.innerText = 'Create paragraph';
// document.body.append(button6);

// let new_paragraph = '';

// button6.addEventListener('click', function () {
// 	if (new_paragraph == '') {
// 		new_paragraph = document.createElement('p');
// 		new_paragraph.innerText = 'New paragraph';
// 		document.body.append(new_paragraph);
// 	} else {
// 		new_paragraph.remove();
// 		new_paragraph = '';
// 	}
// });

// Создать кнопку. При клике на нее создавать список элементов (например, список ul с несколькими пунктами li).
// При повторном клике на кнопку удалять весь список.

// let button7 = document.createElement('button');
// button7.innerText = 'Add List';
// document.body.append(button7);
// let list;

// button7.addEventListener('click', function addList() {
// 	if (list) {
// 		list.remove();
// 		list = false;
// 	} else {
// 		list = document.createElement('ul');
// 		for (let i = 0; i < 5; i++) {
// 			let li = document.createElement('li');
// 			li.innerText = `Element ${i + 1}`;
// 			list.append(li);
// 		}
// 		document.body.append(list);
// 		list = true;
// 	}
// });

let block1 = document.createElement('div');
block1.innerText = 'Create Image';
document.body.append(block1);

block1.addEventListener('mouseover', function () {
	let img = document.createElement('img');
	img.setAttribute(
		'src',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Maria_Ho_WPT_bestbet_Bounty_Scramble_2019.jpg/210px-Maria_Ho_WPT_bestbet_Bounty_Scramble_2019.jpg'
	);
	block1.append(img);
	block1.addEventListener('mouseout', function () {
		img.remove();
	});
});
