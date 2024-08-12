/** @format */

// Selection Sort

// Select the minimum value and insert at the start of arr

const selectionSort = (arr: number[]) => {
	const resultArr = [...arr];

	for (let i = 0; i < resultArr.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < resultArr.length; j++) {
			if (resultArr[minIndex] > resultArr[j]) {
				minIndex = j;
			}
		}

		if (minIndex === i) break;

		let temp = resultArr[i];
		resultArr[i] = resultArr[minIndex];
		resultArr[minIndex] = temp;
	}

	console.log('Selection Sort:', resultArr);

	return resultArr;
};

// Bubble Sort
// Pushes the maximum value  to the  end of array
const bubbleSort = (arr: number[]) => {
	const resultArr = [...arr];

	const n = resultArr.length;

	for (let i = 0; i < n; i++) {
		let swapped = false;
		for (let j = 0; j < n - i - 1; j++) {
			if (resultArr[j] < resultArr[j + 1]) continue;
			let temp = resultArr[j];
			resultArr[j] = resultArr[j + 1];
			resultArr[j + 1] = temp;
			swapped = true;
		}

		if (!swapped) break;
	}

	console.log('Array sorted using Bubble Sort:', resultArr);

	return resultArr;
};

// Insertion Sort
// Insert element to its relevant index while traversing forward

const insertionSort = (arr: number[]) => {
	const result = [...arr];

	for (let i = 1; i < result.length - 1; i++) {
		let j = i;

		while (j > 0 && result[j] < result[j - 1]) {
			let temp = result[j];
			result[j] = result[j - 1];
			result[j - 1] = temp;
			j--;
		}
	}

	console.log('Sorted using Insertion Sort:', result);
};

const mergeSort = (arr: number[], start: number, end: number) => {
	console.log(start, end);
	if (start === end) return;

	const mid = Math.floor((start + end) / 2);

	const left = mergeSort(arr, start, mid);
	const right = mergeSort(arr, mid + 1, end);

	const merged = merge(arr, start, mid, end);

	console.log('Array is sorted using merge sort', arr);

	return arr;
};

const merge = (arr: number[], start: number, mid: number, end: number) => {
	const temp: number[] = [];

	let leftIndex = start;
	let rightIndex = mid + 1;

	while (leftIndex <= mid && rightIndex <= end) {
		if (arr[leftIndex] < arr[rightIndex]) {
			temp.push(arr[leftIndex]);
			leftIndex++;
		} else {
			temp.push(arr[rightIndex]);
			rightIndex++;
		}
	}

	while (leftIndex <= mid) {
		temp.push(arr[leftIndex]);
		leftIndex++;
	}
	while (rightIndex <= end) {
		temp.push(arr[rightIndex]);
		rightIndex++;
	}

	for (let i = start; i <= end; i++) {
		arr[i] = temp[i - start];
	}

	return;
};
const arr = [5, 4, 6, 8, 1, 0, -5, 9];

// selectionSort(arr);
// bubbleSort(arr);
// insertionSort(arr);
mergeSort(arr, 0, arr.length - 1);
