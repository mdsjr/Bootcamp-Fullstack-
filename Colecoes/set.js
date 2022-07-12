function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

const arr = [70, 70, 40, 5, 1112, 4920, 3034, 6];

console.log(uniqueElements(arr));