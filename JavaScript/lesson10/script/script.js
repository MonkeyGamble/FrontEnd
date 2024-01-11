// let box = document.querySelector('div');

// console.log(box.classList); //return DOM Token List
// console.log(box.classList[0]);

// console.log(box.className); //return class names in String

// box.classList.add;
// box.classList.remove;
// box.classList.toggle;
// box.classList.contains('className'); //true false
// box.classList.replace('oldClass', 'newClass');

// Реализовать 10 карточек с числами от 0 до 9 и при нажатии  на какую-либо карточку присвоить ей класс active. В классе  active должны быть стили, которые меняют цвет текста и  цвет заднего фона местами.

// function createBlocks() {
// 	for (let i = 0; i < 10; i++) {
// 		let block = document.createElement('div');
// 		block.innerText = i;
// 		block.style.width = '100px';
// 		block.style.height = '100px';
// 		document.body.append(block);
// 		block.addEventListener('click', function () {
// 			// if (block.classList.contains('active')) {
// 			// 	block.classList.remove('active');
// 			// 	block.style.width = '100px';
// 			// } else {
// 			// 	block.classList.add('active');
// 			// 	block.style.width = '200px';
// 			// 	block.style.transition = '0.5s';
// 			// }
// 			block.classList.toggle('active');
// 		});
// 	}
// }

// createBlocks();

// Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на введённый пользователем цвет (все шаги сделать с помощью JS).

// let block = document.createElement('div');
// block.style.width = '100px';
// block.style.height = '100px';
// block.style.border = '2px solid red';
// document.body.append(block);
// block.addEventListener('mouseover', function () {
// 	block.style.backgroundColor = prompt('enter the color: ');
// });

// // Написать цикл, который создает множество div-ов c  цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов  цвет должен меняться с шагом 5.

// for (let i = 0; i <= 255; i += 5) {
// 	let block = document.createElement('div');
// 	block.style.backgroundColor = `rgb(128,128,${i})`;
// 	block.style.width = '100px';
// 	block.style.height = '100px';
// 	document.body.append(block);
// }

// Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово на английском, а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на английский и обратно.Подсказка. В каждой карточке должно быть два параграфа. В одном написано на русском, а во втором на английском и при нажатии на карточку один параграф получает класс с display none а второй с display block.

// let array = [
// 	{
// 		en: 'banana',
// 		ru: 'банан',
// 	},
// 	{
// 		en: 'apple',
// 		ru: 'яблоко',
// 	},
// 	{
// 		en: 'grape',
// 		ru: 'виноград',
// 	},
// 	{
// 		en: 'pomegranate',
// 		ru: 'грейпфрукт',
// 	},
// ];

// for (let i = 0; i < array.length; i++) {
// 	let card = document.createElement('div');

// 	let en_p = document.createElement('p');
// 	en_p.innerText = array[i].en;
// 	en_p.style.display = 'none';

// 	let ru_p = document.createElement('p');
// 	ru_p.innerText = array[i].ru;

// 	card.append(en_p, ru_p);

// 	card.addEventListener('click', function () {
// 		if (ru_p.style.display !== 'none') {
// 			ru_p.style.display = 'none';
// 			en_p.style.display = 'block';
// 		} else {
// 			ru_p.style.display = 'block';
// 			en_p.style.display = 'none';
// 		}
// 	});

// 	document.body.append(card);
// }

// let btn1 = document.querySelector('.btn1');
// btn1.addEventListener('click', function (event) {
// 	console.log(event.type);
// 	console.log(event.currentTarget);
// 	console.log(event.clientX); //показывает координаты нажатия относительно окна браузера
// 	console.log(event.clientY);
// });

let form = document.querySelector('form');

let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	console.log(fname.value);
	console.log(lname.value);
});

let link = document.querySelector('a');
link.addEventListener('click', function (event) {
	event.preventDefault();
});
