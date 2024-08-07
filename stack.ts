/** @format */

class ListNode<T> {
	value: T;
	next: ListNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
}

class ListStack<T> {
	head: ListNode<T> | null;
	size: number;
	count: number;
	constructor(size: number) {
		this.size = size;
		this.head = null;
		this.count = 0;
	}

	push(value: T) {
		if (this.isFull()) {
			console.error('Overflow', value);
			return;
		}
		const newNode = new ListNode<T>(value);

		newNode.next = this.head;

		this.head = newNode;
		this.count++;
	}

	pop() {
		if (this.isEmpty()) {
			console.error('Underflow');
			return;
		}

		console.log('Popped:', this.head?.value);
		//@ts-ignore
		this.head = this.head?.next;
		this.count--;
	}

	isEmpty() {
		return !this.head;
	}

	isFull() {
		return this.size === this.count;
	}

	peek() {
		if (this.isEmpty()) {
			console.log('Stack is empty');
			return;
		}

		console.log(`Peek:`, this.head?.value);
		return this.head?.value;
	}

	printAll() {
		if (this.isEmpty()) {
			console.log('Stack is empty');
			return;
		}
		let current = this.head;

		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
}

// const stack = new ListStack<string>(3);

// stack.push('a');
// stack.push('b');
// stack.push('c');
// stack.push('d');
// stack.printAll();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.peek();
// stack.push('e');
// stack.push('f');
// stack.push('g');
// stack.printAll();

class ArrayStack<T> {
	top: number;
	size: number;

	stack: T[];

	constructor(size: number) {
		this.size = size;
		this.top = -1;
		this.stack = new Array(size).fill(null);
	}

	push(value: T) {
		if (this.isFull()) {
			console.warn('Stack is full');
			return;
		}

		this.top++;
		this.stack[this.top] = value;
	}

	pop() {
		if (this.isEmpty()) {
			console.warn('Stack is empty');
			return;
		}

		console.log('Popped:', this.stack[this.top]);

		this.top--;
	}

	peek() {
		if (this.isEmpty()) {
			console.warn('Stack is empty');
			return;
		}

		console.log('Peek:', this.stack[this.top]);
	}

	print() {
		if (this.isEmpty()) {
			console.warn('Stack is empty');
			return;
		}

		let current = this.top;

		console.log('------------------------------------');

		while (current >= 0) {
			console.log(this.stack[current]);
			current--;
		}

		console.log('------------------------------------');
	}

	isEmpty() {
		return this.top === -1;
	}
	isFull() {
		return this.top === this.size - 1;
	}
}

const stack = new ArrayStack<number>(3);

stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);
stack.print();
stack.pop();
// stack.print();
stack.pop();
stack.peek();
stack.push(9);
stack.print();
stack.pop();
stack.pop();
stack.pop();
