// function numberTen(num) {
// 	if (num > 10) return 'The number is more then 10';
// 	else if (num < 10) return 'The number is less then 10';
// 	else return 'The number is 10';
// }

// function zeroToTen() {
// 	for (let i = 0; i <= 10; i += 2) {
// 		console.log(i);
// 	}
// }
// zeroToTen();

// let arr = [1, 0, -2, 3, 0, 10, 12, -90];

// function evenArr(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] += 1;
// 	}
// 	return arr;
// // }
// // console.log(evenArr(arr));

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 6];

// // function repeat(arr) {
// // 	for (let i = 0; i < arr.length; i++) {
// // 		for (let j = i + 1; j < arr.length; j++) {
// // 			if (arr[i] === arr[j]) return arr[i];
// // 		}
// // 	}
// // // }

// // function repeat(arr) {
// // 	arr.sort();
// // 	for (let i = 1; i < arr.length; i++) {
// // 		if (arr[i] === arr[i - 1]) {
// // 			return arr[i];
// // 		}
// // 	}
// // }

// // console.log(repeat(arr));

// // let arr2 = [1, 2, 4, 0, 2, 6];

// // function printPairs(arr) {
// // 	for (let i = 0; i < arr.length - 1; i++) {
// // 		for (let j = i + 1; j < arr.length; j++) {
// // 			console.log(`${arr[i]} : ${arr[j]}`);
// // 		}
// // 	}
// // }

// // printPairs(arr2);

// let arr = [1, 10, 5, 4, 3, 7, 8, 6, 2, 9, 0];

// function sumTen(arr, num) {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === num) {
// 				console.log(`${arr[i]} + ${arr[j]} = 10`);
// 			}
// 		}
// 	}
// }

// function sumTen3(arr, num) {
// 	for (let i = 0; i < arr.length - 2; i++) {
// 		for (let j = i + 1; j < arr.length - 1; j++) {
// 			for (let n = j + 1; n < arr.length; n++) {
// 				if (arr[i] + arr[j] + arr[n] === num)
// 					console.log(`${arr[i]}, ${arr[j]}, ${arr[n]}`);
// 			}
// 		}
// 	}
// }

// // sumTen3(arr, 10);

// let arr2 = [0, 1, 1, 1, 0, 1, 0];
// let arr3 = [];

// // for (let i = 0; i < arr2.length; i++) {
// // 	if (arr2[i] === 0) arr3.push(0);
// // }
// // for (let i = 0; i < arr2.length; i++) {
// // 	if (arr2[i] === 1) arr3.push(1);
// // }

// for (let i = 0; i < arr2.length; i++) {
// 	if (arr2[i] === 0) {
// 		arr3.unshift(0);
// 	} else arr3.push(1);
// }

// // console.log(arr3);

// function sortArr(arr) {
// 	let count = 0;
// 	for (let elem of arr) {
// 		if (elem === 0) count++;
// 	}
// 	for (let i = 0; i < count; i++) arr[i] = 0;
// 	for (let i = count; i < arr.length; i++) arr[i] = 1;
// 	return arr;
// }

// console.log(sortArr(arr2));

let arr4 = [0, 1, 1, 1, 2, 1, 2, 0, 1, 2, 0];

function binarySortArr(arr) {
	let countZero = 0;
	let countOne = 0;

	for (let elem of arr) {
		if (elem === 0) countZero++;
		else if (elem === 1) countOne++;
	}

	for (let i = 0; i < countZero; i++) {
		arr[i] = 0;
	}

	for (let i = countZero; i < countZero + countOne; i++) {
		arr[i] = 1;
	}

	for (let i = countZero + countOne; i < arr.length; i++) {
		arr[i] = 2;
	}

	return arr;
}

// sortArr(arr4);
// console.log(arr4);

console.log(binarySortArr(arr4));
