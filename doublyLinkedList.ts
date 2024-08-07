/** @format */

class DoubleNode {
	data: number | string;
	next: DoubleNode | null;
	prev: DoubleNode | null;
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	head: DoubleNode;
	tail: DoubleNode;
	constructor(data: number | string) {
		this.head = new DoubleNode(data);
		this.tail = this.head;
	}

	insert(data: number | string) {
		let current = this.head;

		while (current.next !== null) {
			current = current.next;
		}
		current.next = new DoubleNode(data);
		current.next.prev = current;
	}

	insertAtStart(data: number | string) {
		const newNode = new DoubleNode(data);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
	}

	delete(data: number | string) {
		let current: DoubleNode | null = this.head;
		let prev: DoubleNode | null = null;

		if (!this.head) {
			return;
		}
		while (current !== null) {
			if (current.data === data) {
				if (prev !== null) {
					prev.next = current.next;
					if (current.next !== null) {
						current.next.prev = prev;
					}
				} else {
					this.head = current.next;
					if (this.head !== null) {
						this.head.prev = null;
					}
				}
				if (current === this.tail) {
					this.tail = prev !== null ? prev : this.head!;
				}
				return;
			}
			prev = current;
			current = current.next;
		}
	}

	traverse() {
		let current: DoubleNode | null = this.head;
		while (current !== null) {
			console.log(current.data);
			current = current.next;
		}
	}
}
