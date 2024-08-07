/** @format */

class ListNode {
	data: number | string;
	next: ListNode | null;
	constructor(data: number | string) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	head: ListNode;
	constructor(data: number | string) {
		this.head = new ListNode(data);
	}

	insert(data: number | string) {
		let current = this.head;

		while (current.next !== null) {
			current = current.next;
		}
		current.next = new ListNode(data);
	}

	insertAtStart(data: number | string) {
		const newNode = new ListNode(data);
		newNode.next = this.head;
		this.head = newNode;
	}

	delete(data: number | string) {
		let current: ListNode | null = this.head;
		let prev: ListNode | null = null;

		if (!this.head) {
			return;
		}

		if (this.head.data === data) {
			this.head = this.head.next!;
			return;
		}

		while (current !== null) {
			if (current.data === data) {
				if (prev !== null) {
					prev.next = current.next;
				}
				return;
			}

			prev = current;
			current = current.next;
		}
	}

	print() {
		let current: ListNode | null = this.head;

		while (current !== null) {
			console.log(current.data);
			current = current.next;
		}
	}
}

const list = new LinkedList(1);
list.insert(2);
list.insert(3);
list.delete(1);
list.insertAtStart(4);

list.print();
