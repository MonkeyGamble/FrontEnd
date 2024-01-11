// script.js

// const headings = document.querySelectorAll('.heading');

// document.addEventListener('mousemove', event => {
// 	// Получаем координату X указателя мыши
// 	const mouseX = event.clientX;

// 	// Получаем ширину контейнера
// 	const containerWidth = document.querySelector('.container').offsetWidth;

// 	// Вычисляем процентное положение указателя мыши относительно контейнера
// 	const percentage = (mouseX / containerWidth) * 100;

// 	// Изменяем толщину шрифта в зависимости от положения указателя мыши
// 	// 100 - минимальное значение font-weight, 900 - максимальное значение
// 	const fontWeight = 100 + (percentage / 2) * 8; // Преобразуем в диапазон 100-900

// 	// Ограничиваем значение в диапазоне 100-900
// 	headings.forEach(heading => {
// 		heading.style.fontWeight = Math.min(900, Math.max(100, fontWeight));
// 	});
// });

// const headings = document.querySelectorAll('.heading');

// document.addEventListener('mousemove', event => {
// 	const mouseX = event.clientX;
// 	const windowWidth = window.innerWidth; // Ширина окна браузера
// 	const fontWeight = (mouseX / windowWidth) * 800; // Преобразуем в диапазон 0-800

// 	headings.forEach(heading => {
// 		heading.style.fontWeight = Math.min(800, Math.max(100, fontWeight));
// 	});
// });

// const headings = document.querySelectorAll('.heading');

// document.addEventListener('mousemove', event => {
// 	const mouseX = event.clientX;
// 	const documentWidth = document.documentElement.scrollWidth; // Ширина всего документа
// 	const fontWeight = (mouseX / documentWidth) * 800; // Преобразуем в диапазон 0-800

// 	headings.forEach(heading => {
// 		heading.style.fontWeight = Math.min(800, Math.max(100, fontWeight));
// 	});
// });
// script.js
// script.js

// script.js
// script.js
// const headings = document.querySelectorAll(
// 	'.animated-heading, .animated-heading-2, .animated-heading-3'
// );

// document.addEventListener('mousemove', event => {
// 	const mouseX = event.clientX;
// 	const documentWidth = document.documentElement.scrollWidth;

// 	// Пример значения для font-variation-settings в зависимости от положения мыши
// 	const variationValue1 = (mouseX / documentWidth) * 100; // Пример для толщины 100
// 	const variationValue2 = (mouseX / documentWidth) * 300; // Пример для толщины 300
// 	const variationValue3 = (mouseX / documentWidth) * 600; // Пример для толщины 600

// 	headings[0].style.fontVariationSettings = `"wght" ${variationValue1}`;
// 	headings[1].style.fontVariationSettings = `"wght" ${variationValue2}`;
// 	headings[2].style.fontVariationSettings = `"wght" ${variationValue3}`;
// });

// const headings = document.querySelectorAll(
// 	'.animated-heading, .animated-heading-2, .animated-heading-3'
// );

// document.addEventListener('mousemove', event => {
// 	const mouseX = event.clientX;
// 	const documentWidth = document.documentElement.scrollWidth;
// 	const variationValue = (mouseX / documentWidth) * 400; // Пример значения для font-variation-settings

// 	headings.forEach(heading => {
// 		heading.style.fontVariationSettings = `"wght" ${variationValue}`;
// 	});
// });

// script.js
const headings = document.querySelectorAll(
	'.animated-heading, .animated-heading-2, .animated-heading-3'
);

document.addEventListener('mousemove', event => {
	const mouseX = event.clientX;
	const documentWidth = document.documentElement.scrollWidth;

	// Пример значения для font-variation-settings в зависимости от положения мыши
	const variationValue1 = (mouseX / documentWidth) * 100; // Пример для толщины 100
	const variationValue2 = (mouseX / documentWidth) * 300; // Пример для толщины 300
	const variationValue3 = (mouseX / documentWidth) * 600; // Пример для толщины 600

	headings[0].style.fontVariationSettings = `"wght" ${variationValue1}`;
	headings[1].style.fontVariationSettings = `"wght" ${variationValue2}`;
	headings[2].style.fontVariationSettings = `"wght" ${variationValue3}`;
});
