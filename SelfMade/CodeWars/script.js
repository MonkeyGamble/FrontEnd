function flickSwitch(arr) {
	let check = true;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'flick') {
			check = false;
		}
		arr[i] = check;
	}
	return arr;
}

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']));
