// Написать функцию, получающую на вход два числа.
// Если оба числа чётные - функция возвращает их произведение.
// Если оба числа нечётные - функция возвращает их сумму.
// Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

function getResult(num1, num2) {
	if (num1 % 2 === 0 && num2 % 2 === 0) {
		return num1 * num2;
	} else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
		return num1 + num2;
	} else if (num1 % 2 === 0 && num2 % 2 !== 0) {
		return num2;
	}
	return num1;
}
console.log(getResult(2, 4));
console.log(getResult(3, 7));
console.log(getResult(2, 7));
console.log(getResult(3, 4));

// Написать  функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function getDays(sec) {
	return sec / 86400;
}
console.log(getDays(87345));

// Написать функцию isPrime, которая принимает число и возвращает true
// если оно простое (имеет только два делителя: 1 и само число), и false в противном случае.

function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(97));

// Написать функцию, которая в качестве аргументов получает два числа и выводит в консоль наименьшее.

function showSmallest(num3, num4) {
	if (num3 < num4) {
		console.log(num3);
	} else {
		console.log(num4);
	}
}
showSmallest(3, 7);
showSmallest(6, 2);
showSmallest(9, 9);

// Написать  функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.

function getArray(num5, num6) {
	let array = [];
	let min;
	let max;
	if (num5 < num6) {
		min = num5;
		max = num6;
	} else {
		min = num6;
		max = num5;
	}

	for (i = min; i <= max; i++) {
		array.push(i);
	}
	return array;
}
console.log(getArray(3, 7));
console.log(getArray(6, 2));
console.log(getArray(9, 9));
console.log(getArray(17, 3));
