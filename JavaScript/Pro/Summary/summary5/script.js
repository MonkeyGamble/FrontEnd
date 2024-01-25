// let numbers = [22, -10, 8, 7, 15, 101, 73, 55, 85, -100];

// // let result = numbers.map(elem => elem / 2);

// // let result2 = [];

// // numbers.forEach(elem => result2.push(elem / 2));

// // console.log(result);
// // console.log(result2);

// // 2. Создать новый массив, в котором все отрицательные числа будут заменены на 0
// // => [22, 0, 0, 7, 15, 101, 73, 55, 85, 0]
// // Решите задачу, используя forEach() и map()
// // Выведите сформированные массивы в консоль

// let result3 = numbers.map(elem => (elem < 0 ? 0 : elem));
// let result4 = [];
// let result5 = [];
// numbers.forEach(elem => (elem < 0 ? result4.push(0) : result4.push(elem)));
// numbers.forEach(elem => result5.push(elem < 0 ? 0 : elem));

// // console.log(result3);
// // console.log(result4);
// // console.log(result5);

// let result6 = numbers.map(elem => (elem % 2 === 0 ? 'Hello' : elem));
// let result7 = [];
// // numbers.forEach(elem => result7.push(elem % 2 === 0 ? 'Hello' : elem));
// // console.log(result6);
// // console.log(result7);

// const array = ['hello', 1, 45, true, 10, 'hi', undefined];
// let numbers = [22, -10, 8, 7, 15, 101, 73, 55, 85, -100];

// let result = array.map(elem => (typeof elem === 'number' ? 'number' : elem));
// let result2 = numbers.map(elem =>
// 	elem.toString().endsWith('5') ? 'ends of 5' : elem
// );
// let result3 = numbers.map(elem => (elem % 10 === 5 ? 'ends of 5' : elem));
// // console.log(result3);
// let result5 = [];
// let result4 = numbers.filter(elem => elem < 0);
// numbers.forEach(elem => (elem < 0 ? result5.push(elem) : 0));
// console.log(result4);
// console.log(result5);
// 7. Дан массив с числами. сформировать новый массив, в который попадут только числа, оканчивающиеся на 5
let numbers = [22, -10, -8, 7, 15, 101, 73, 55, 85, -100]; //=> [15, 55, 85]
// Решите задачу, используя forEach() и filter()
// Выведите сформированные массивы в консоль
let result2 = [];
let result3 = [];

let result = numbers.filter(elem => elem % 10 === 5);

numbers.forEach(elem => {
	if (elem % 10 === 5) {
		result2.push(elem);
	}
});

numbers.forEach(elem => (elem % 10 === 5 ? result3.push(elem) : undefined));

console.log(result);
console.log(result2);
console.log(result3);
