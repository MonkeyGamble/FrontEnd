// let arr = [2, 4, 5, 1, 3];

// for (let i = 0; i < arr.length - 1; i++) {
// 	for (let j = 0; j < arr.length - 1 - i; j++) {
// 		if (arr[j] > arr[j + 1]) {
// 			let temp = arr[j];
// 			arr[j] = arr[j + 1];
// 			arr[j + 1] = temp;
// 		}
// 	}
// }
// console.log(arr);

function howMuchILoveYou(nbPetals) {
	let array = [
		'I love you',
		'a little',
		'a lot',
		'passionately',
		'madly',
		'not at all',
	];
	return array[(nbPetals - 1) % array.length];
}
console.log(howMuchILoveYou(6));
console.log(howMuchILoveYou(8));
console.log(howMuchILoveYou(7));
