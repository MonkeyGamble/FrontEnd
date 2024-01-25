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

const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const black = document.querySelector('.black');
const yellow = document.querySelector('.yellow');

const box = document.querySelector('.box');

red.addEventListener('click', () => {
	box.style.background = 'red';
});

green.addEventListener('click', () => {
	box.style.background = 'green';
});

blue.addEventListener('click', () => {
	box.style.background = 'blue';
});

black.addEventListener('click', () => {
	box.style.background = 'black';
});

yellow.addEventListener('click', () => {
	box.style.background = 'yellow';
});
