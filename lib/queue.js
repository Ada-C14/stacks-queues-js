const QUEUE_SIZE = 20;

class Queue {
    constructor() {
        this.store = new Array(QUEUE_SIZE);
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        if (this.isFull()) {
            throw new Error("your queue is full");
        } else {
            this.store[this.tail] = element;
            this.tail = (this.tail + 1) % QUEUE_SIZE;
        }
    }

    dequeue() {
        const element = this.store[this.head];
        this.store[this.head] = null;
        this.head = (this.head + 1) % QUEUE_SIZE;
        return element;
    }

    front() {
        return this.store[this.head];
    }

    size() {
        let count = 0;
        let pointer = this.head;

        while (this.store[pointer]) {
            count++;
            pointer = (pointer + 1) % QUEUE_SIZE;
        }

        return count;
    }

    isEmpty() {
        return this.head === this.tail;
    }

    isFull() {
        return this.head === (this.tail + 1) % QUEUE_SIZE;
    }

    toString() {
        let arr;
        if (this.head > this.tail) {
            arr = this.store.slice(this.head, this.capacity).concat(this.store.slice(0, this.tail));
        } else {
            arr = this.store;
        }
        return JSON.stringify(arr.filter((v) => v !== null));
    }
}

module.exports = Queue;