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

    //returns the size of the current circular array, including empty locations
    size() {
        let count = 0;
        while (!!this.store[count]) {
            count++;
        }
        return count;
    }

    //returns the count of populated elements in the circular array
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

    //currently, circular buffer is 20 elements long and elements in beginning of buffer get overwritten... you know, like a buffer. Can implement the below if the circular buffer proves to be too small and data that needs to be accessed is getting overwritten.... but then I guess you probably wouldn't do a circular array...
    doubleStoreSize() {
        const newStore = new Array(this.size() * 2)
        for(let i = 0; i < this.size(); i++) {
            this.store[i] = newStore[i];
        }
        this.store = newStore;
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