/** @format */

class Queue {
	queue: any[];
	constructor() {
		this.queue = [];
	}

	enqueue(data: string | number) {
		this.queue.push(data);
	}

	dequeue() {
		if (this.isEmpty()) throw new Error('Queue is empty');
		return this.queue.shift();
	}

	isEmpty() {
		return !!this.queue.length;
	}
	show() {
		console.log(this.queue);
	}

	size() {
		return this.queue.length;
	}
	peek() {
		return this.queue[0];
	}
}

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue('hamid');
// queue.show();
// queue.dequeue();
// queue.show();

// class ListNode<T> {
// 	data: T;
// 	next: ListNode<T> | null;
// 	constructor(data: T) {
// 		this.data = data;
// 		this.next = null;
// 	}
// }

// class LinkedListQueue<T> {
// 	maxSize: number;
// 	size: number;
// 	front: ListNode<T> | null;
// 	rear: ListNode<T> | null;

// 	constructor() {
// 		this.front = null;
// 		this.rear = null;
// 	}

// 	enqueue(data: T) {
// 		const newNode = new ListNode<T>(data);
// 		if (!this.front) {
// 			this.front = this.rear = newNode;
// 			return;
// 		}
// 		this.rear!.next = newNode;
// 		this.rear = newNode;
// 	}
// 	dequeue() {
// 		if (!this.front) throw Error('underflow');
// 		this.front = this.front.next;
// 	}
// 	peek() {
// 		if (!this.front) throw Error('underflow');
// 		console.log(this.front.data);
// 	}
// 	show() {
// 		let current = this.front;
// 		while (current) {
// 			console.log('-->', current.data);
// 			current = current.next;
// 		}
// 	}
// }

// const listQueue = new LinkedListQueue<number>();
// listQueue.enqueue(1);
// listQueue.enqueue(3);
// listQueue.show();
// listQueue.dequeue();
// listQueue.show();
// listQueue.enqueue(5);
// listQueue.peek();
// listQueue.show();

class CircularQueue<T> {
	queue: T[];
	size: number;
	front: number;
	rear: number;

	constructor(size: number) {
		this.queue = new Array(size).fill(null);
		this.size = size;
		this.front = -1;
		this.rear = -1;
	}
	enqueue(data: T) {
		if (this.isFull()) return console.error('Queue is full');
		this.rear = (this.rear + 1) % this.size;

		this.queue[this.rear] = data;

		if (this.front === -1) this.front = 0;
	}
	dequeue() {
		if (this.isEmpty()) return console.error('Queue is empty');

		if (this.front === this.rear) {
			this.front = -1;
			this.rear = -1;
			return;
		} else this.front = (this.front + 1) % this.size;
	}
	peek() {
		return this.queue[this.front];
	}
	isFull() {
		return this.front === (this.rear + 1) % this.size;
	}
	isEmpty() {
		return this.front === -1;
	}
	display() {
		let i = this.front;
		while (i !== this.rear) {
			console.log(this.queue[i]);
			i = (i + 1) % this.size;
		}
		console.log(this.queue[this.rear]);
	}
}

const queue = new CircularQueue<number>(3);

// queue.dequeue()

queue.enqueue(2);
// queue.display();

queue.enqueue(6);
queue.enqueue(8);
queue.dequeue();
queue.enqueue(9);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.display();
