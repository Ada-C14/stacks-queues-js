class Queue {
    constructor(size = 20) {
        this.store = new Array(size);
        this.maxSize = size;
        this.head = -1;
        this.tail = -1;
    }

    enqueue(value) {
        if (((this.tail + 1) % this.maxSize === this.head) || (this.head == 0 && this.tail == this.store.length -1)) {
            throw new Error('Queue is full.');
        } else if (this.head === -1) {
            this.head = 0;
            this.tail = 1;
            this.store[this.head] = value;
        } else {
            this.store[this.tail] = value;
            this.tail = (this.tail + 1) % this.maxSize;
        }
        
    }

    dequeue() {
        if (this.head === -1) throw new Error("The queue is empty.");

        const data = this.store[this.head];
        this.store[this.head] = null;

        // increment the head (consider wrapping around)
        this.head = (this.head + 1) % this.maxSize;

        // if head === tail then the list is empty
        // reset head and tail to -1
        if (this.head === this.tail) this.head = this.tail = -1;

        return data;
    }

    front() {
        return this.store[this.head];
    }

    size() {
        let count = 0;
        let visited = 0;

        while (visited < this.maxSize) {
            if (!!this.store[visited]) {
                count ++;
            }
            visited ++;
        }

        return count;
    }

    isEmpty() {
        return !this.store[this.head];
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