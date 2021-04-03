class Queue {
    constructor(size = 20) {
        this.store = new Array(size);
        this.front = null;
        this.back = null;
    }

    enqueue(element) {
        //if front === null
        // add to index 0
        // if (this.front === null) {
        //     this.store[element];
        // }
    }

    dequeue() {
    }

    front() {
    }

    size() {
    }

    isEmpty() {
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