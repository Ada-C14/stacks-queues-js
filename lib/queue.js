//Using a circular buffer with an internal array starting at 20 elements

class Queue {
    constructor() {
        this.store = new Array(20);
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        if (this.rear == (this.size() - 1)) {
            this.rear = 0;
        } else {
            this.rear++;
        }
        this.store[this.rear] = value;
    }

    dequeue() {
        if (this.front == (this.size() - 1)) {
            this.front = 0;
        } else {
            this.front++;
        }

        const dequeued = this.store[this.front];
        this.store[this.front] = null;

        return dequeued;
    }

    front() {
        return this.store[front];
    }

    size() {
        let count = 0;
        while (!!this.store[count]) {
            count++;
        }
        return count;
    }

    length() {
        return this.rear - this.front;
    }

    isEmpty() {
        if (this.front == this.rear) {
            return true;
        } else {
            return false;
        }
    }

    toString() {
        let arr;
        if (this.head > this.tail) {
            arr = this.store.slice(this.head, this.capacity).concat(this.store.slice(0, this.tail));
        } else {
            arr = this.store
        }
        return JSON.stringify(arr.filter((v) => v !== null));
    }
}

module.exports = Queue;