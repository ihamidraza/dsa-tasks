/** @format */

class HashNode<K, V> {
	key: K;
	value: V;
	next: HashNode<K, V> | null;

	constructor(key: K, value: V) {
		this.key = key;
		this.value = value;
		this.next = null;
	}
}

class HashTable<K, V> {
	table: HashNode<K, V>[] | null[] = [];
	count: number;
	constructor(size: number) {
		this.table = new Array(size).fill(null);
		this.count;
	}

	private hash(key: K): number {
		const keyString = String(key);
		const index = keyString.length % this.table.length;
		return index;
	}
	set(key: K, value: V) {
		const index = this.hash(key);
		const newNode = new HashNode(key, value);

		const hashLocation = this.table[index];

		if (!hashLocation) {
			this.table[index] = newNode;
		} else {
			let current = hashLocation;

			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}

		this.count++;
	}

	get(key: K): V | null {
		const index = this.hash(key);

		let current: HashNode<K, V> | null = this.table[index];

		while (current) {
			if (current.key === key) return current.value;
			current = current.next;
		}

		return null;
	}

	remove(key: K): V | null {
		const index = this.hash(key);

		let current = this.table[index];

		if (!current) return null;

		if (!current.next) {
			this.table[index] = null;
		}

		let prev: HashNode<K, V> | null = null;

		while (current) {
			if (current.key === key) {
				if (prev) prev!.next = current.next;
				else this.table[index] = current.next;
				this.count--;
				return current.value;
			}
			prev = current;
			current = current?.next;
		}
		return null;
	}

	isKeyExists(key: K) {
		this.get(key) !== null;
	}

	getSize() {
		return this.count;
	}

	isEmpty() {
		return !!this.count;
	}
}

const table = new HashTable(3);

table.set('key', 'value');
table.set(1, 5);
table.set('abc', 'def');
table.set('767', 'def');

table.remove('key');
table.remove('767');
console.log(table.get('key'));
console.log(table.get(1));
console.log(table.get('767'));
// console.log(table.get('a'));
