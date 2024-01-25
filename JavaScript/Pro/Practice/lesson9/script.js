// const button1 = document.querySelector('.button1');
// const button2 = document.querySelector('.button2');

// button1.addEventListener('click', () => console.log('button1'));
// button2.addEventListener('click', () => console.log('button2'));

// const paragraph = document.querySelector('p');

// prgph.addEventListener('click', () => console.log('Hello'));

// prgph.addEventListener('click', () => {
// 	let color = prgph.style.color;
// 	prgph.style.color = color === 'blue' ? 'orange' : 'blue';
// });

// prgph.addEventListener('click', () => {
// 	if (prgph.style.color == 'blue') prgph.style.color = 'orange';
// 	else prgph.style.color = 'blue';
// });

// prgph.addEventListener('click', () => {
// 	prgph.style.color == 'blue'
// 		? (prgph.style.color = 'orange')
// 		: (prgph.style.color = 'blue');
// });

// paragraph.addEventListener('click', e => {
// 	e.target.style.color == 'blue' ? 'orange' : 'blue';
// });

// prgph.addEventListener('click', e => {
// 	if (e.target.style.color == 'blue') e.target.style.color = 'orange';
// 	else e.target.style.color = 'blue';
// });

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

const box = document.querySelector('.box');

btn1.addEventListener('click', () => {
	box.style.background = 'red';
});

btn2.addEventListener('click', () => {
	box.style.background = 'green';
});

btn3.addEventListener('click', () => {
	box.style.background = 'blue';
});

btn4.addEventListener('click', () => {
	box.style.background = 'black';
});

btn5.addEventListener('click', () => {
	box.style.background = 'yellow';
});
