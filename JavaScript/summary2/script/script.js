// // // ================= var =================

// // // function test() {
// // //   var hello = 'hello world'
// // //   console.log(hello)
// // // }

// // // hoisting = поднятие всплытие
// // // // срабатывает при использовании var вне функции и для function declaration

// // // console.log(hello); // undefined || if let or const get error

// // // if (true) {
// // // 	var hello = 'hello world';
// // // }

// // // // test() // 'hello world'
// // // console.log(hello); // error || if var print 'hello world'

// // // // console.log(second_hello); // error is not defined

// // // let num = 4; // ставим точку с запятой чтобы javascript понял что здесь сротка заканчивается

// // // (function () {
// // // 	if (true) {
// // // // 		var second_hello = 'hello world';
// // // // 	}
// // // // 	console.log('second_hello');
// // // // })();

// // // // var username = 'John';
// // // // var username = 'Anna';
// // // // console.log(username); // Anna

// // // // for (var i = 0; i <= 10; i++) {
// // // // 	console.log(i);
// // // // }
// // // // console.log(i); // вернет 11 (выполнится i++)

// // // //Палиндром

// // // // Напишите функцию, которая в качестве аргументов получает слово и определяет,
// // // // является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.

// // // // function isPalindrom(word) {
// // // // 	let reverseWord = '';
// // // // 	for (let i = word.length - 1; i >= 0; i--) {
// // // // 		reverseWord += word[i];
// // // // 	}
// // // // 	return word.toLowerCase() == reverseWord.toLowerCase();
// // // // }

// // // // console.log(isPalindrom('home'));
// // // // console.log(isPalindrom('anna'));
// // // // console.log(isPalindrom('Anna'));

// // // // return word.split('').reverse().join('').toLowerCase() === word.toLowerCase();

// // // // Напишите функцию, которая в качестве аргументов получает массив и элемент,
// // // // потом проверяет существует ли этот элемент в массиве, если да возвращает true
// // // // в противном случае false.
// // // // [3,2,6]

// // function isNumberHere(arr = [], num) {
// // 	if (arr == '') return false;
// // 	for (let i = 0; i < arr.length; i++) {
// // 		if (arr[i] === num) {
// // 			return true;
// // 		}
// // 	}
// // 	return false;
// // }
// // // console.log(isNumberHere([3, 2, 6], 5));
// // // console.log(isNumberHere([3, 2, 6], 3));
// // // console.log(isNumberHere([3, 2, 6], 6));

// // // // Напишите функцию, которая в качестве аргументов принимает массив и возвращает его
// // // // уникальные элементы без дубликатов в виде массива. Использовать функцию из 2 задачи.
// // // // [1,2,3,2,4,1,5]
// // // //[1,2,3,4,5]

// // function getWithoutDuplicates(arr = []) {
// // 	const newArray = [];
// // 	for (let i = 0; i < arr.length; i++) {
// // 		if (!isNumberHere(newArray, arr[i])) {
// // 			// если true  - добавляем элемент в массив
// // 			newArray.push(arr[i]);
// // 		}
// // 	}
// // 	return newArray;
// // }

// // console.log(getWithoutDuplicates([1, 2, 3, 2, 4, 1, 5]));

// //====================DOM============================

// // document.querySelector('#my_elem'); //возвращает элемент с помощью указателя
// // document.getElementById('elem_id');
// // document.getElementsByTagName('div');
// // document.getElementsByClassName('elem_class');

// const pElems = document.querySelectorAll('p');
// console.log(pElems);

// // ================= dom =================
// // document.querySelector("#my_elem") // универсальный метод возвращает с помощью указателья
// // document.getElementById("elem_id")
// // document.getElementsByTagName("div")
// // document.getElementsByClassName("elem_class")

// const pElems = document.querySelector("p")
// console.log(pElems);
// // for (let i = 0; i < pElems.length; i++) {
// //   console.log(pElems[i]);
// // }

// // коллекции доступны только в среде выполнения браузера, поэтому методы массивов на них не работают (разные прародители)
// // коллекции могут быть живыми и наоборот
// // живая коллекция реагирует на изменения DOM дерева
// // getElementById getElementsByTagName getElementsByClassName возвращают живую коллекцию узлов, querySelectorAll - нет

// // remove() удаляет элемент из DOM
// pElems[0].remove()
// console.log(pElems)

// Напишите функцию, которая принимает один аргумент - указатель на элемент, находит их по этому указателю и выделяет их границы цветом.

function addBorder(selector) {
	const elements = document.querySelectorAll(selector);
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.border = '2px solid red';
	}
}
addBorder('.super');

// Напишите функцию, которая добавит к содержимому каждого элемента списка его порядковый номер.

function addNumber() {
	const listElements = document.querySelectorAll('.list li');
	for (let i = 0; i < listElements.length; i++) {
		listElements[i].innerText += ' ' + (i + 1);
	}
}
addNumber();
