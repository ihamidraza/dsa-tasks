/** @format */

function LinearSearch<T>(arr: T[], target: T) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			console.log('Element found at index:', i);
			return i;
		}
	}

	console.log('Element not found!');

	return -1;
}

const arr = [32, 41, 65, 21, 90, 15, -45, 0];

// LinearSearch(arr, 0);
// LinearSearch(arr, 10);

function binarySearch(arr: number[], target: number) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] === target) {
			console.log('Element found at index:', mid);
			return mid;
		}

		if (arr[mid] > target) {
			right = mid - 1;
		} else left = mid + 1;
	}
	console.log('Element not found!');

	return -1;
}

arr.sort((a, b) => a - b);

binarySearch(arr, 41);
binarySearch(arr, 100);
