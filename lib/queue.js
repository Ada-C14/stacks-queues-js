class Queue {
    constructor() {
        this.store = new Array(20);
        this.head = 0;
        this.tail = 0;
    }

    enqueue(value) {
        if (this.tail == (this.size() - 1)) {
            throw new Error('The queue is full!');
        } else {
            this.tail += 1;
            this.store[this.tail] = value;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('The queue is empty!');
        } else {
            this.head += 1;
        }
        const data = this.store[this.head];
        this.store[this.head] = null

        return data;
    }

    front() {
        throw new Error("This method has not been implemented!");
    }

    size() {
        let count = 0;
        while (!!this.store[count]) {
            count += 1;
        }
        return count;
    }

    isEmpty() {
        if (this.head == this.tail) {
            return true;
        } else {
            return false;
        }    }

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