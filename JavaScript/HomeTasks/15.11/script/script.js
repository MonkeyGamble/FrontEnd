// Составьте программу, которая присваивает переменной d значение 7,
//  а затем выводит на экран: в первой строке - это значение,
//  во второй – квадрат этого значения,
//  в третьей – куб этого значения.
//  Программа должна выводить на экран новое значение.

let d = 7;
console.log(d);
console.log(d ** 2);
console.log(d ** 3);

// Составьте программу, которая принимает с клавиатуры два целых числа
// и, если первое больше второго, выводит на экран их сумму,
// если же наоборот – выводит на экран их произведение.
// В случае же, если числа одинаковы, программа выводит на экран сообщение "числа одинаковые".

let num1 = Number(prompt('Enter the 1st number:'));
let num2 = Number(prompt('Enter the 2nd number:'));
if (num1 > num2) {
	console.log(num1 + num2);
} else if (num1 < num2) {
	console.log(num1 * num2);
} else console.log('Numbers are equal');

// Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, выводит его куб.

let num = Number(prompt('Enter the number:'));
if (num > 0) {
	console.log(num ** 3);
} else console.log('The number is negative');

// Составьте программу, которая принимает с клавиатуры два числа:
// первое – количество учеников в классе,
// второе – количество стульев в кабинете.
// Программа проверит соответствие между этими двумя значениями
// и выведет на экран соответствующую информацию.
// ввод: 24, 28 ⇒ вывод: стульев хватает;
// ввод: 24, 22 ⇒ вывод: стульев не хватает

let students = Number(prompt('Enter number of students:'));
let chairs = Number(prompt('Enter number og chairs:'));
if (chairs >= students) {
	console.log('There is enough chairs');
} else console.log('There is not enough chairs');

// Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке.

for (let i = 1; i < 10; i++) {
	console.log(i);
}

// Написать цикл, который выводит те числа из массива, которые больше или равны 15.

let arr = [1, 15, 3, 27, -4, 34, 2, 3, 67, 15];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] >= 15) {
		console.log(arr[i]);
	}
}

// Написать цикл, который выводит только нечетные числа массива

let arr1 = [1, 15, 3, 27, -4, 34, 2, 3, 67, 15];
for (let i = 0; i < arr1.length; i++) {
	if (arr1[i] % 2 !== 0) {
		console.log(arr1[i]);
	}
}

// Вывести только те значения массива, индекс которых кратен трем.

let arr2 = [1, 15, 3, 27, -4, 34, 2, 3, 67, 15];
for (let i = 0; i < arr2.length; i++) {
	if (arr2[i] % 3 === 0) {
		console.log(arr2[i]);
	}
}

// Найти сумму нечетных чисел и вывести в консоль.

let arr3 = [1, 15, 3, 27, -4, 34, 2, 3, 67, 15];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
	if (arr3[i] % 2 !== 0) {
		sum += arr3[i];
	}
}
console.log(sum);

// Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.

let arr4 = [1, 15, 3, 27, -4, 34, 2, 3, 67, 15];
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < arr4.length; i++) {
	if (arr4[i] % 2 !== 0) {
		sumOdd += arr4[i];
	} else {
		sumEven += arr4[i];
	}
}
if (sumEven > sumOdd) {
	console.log(sumEven - sumOdd);
} else console.log(sumOdd - sumEven);
