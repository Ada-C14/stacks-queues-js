// had to look at geekforgeeks for reference..

class Queue {
    constructor(size = 20) {
        this.store = new Array(size);
        this.front = this.back = -1;
        this.size = size;
    }

    enqueue(element) {
        if ((this.back + 1) % this.size === this.front) {
            throw newError("Full Queue!");
        } else if (this.front === -1) {
            //if empty 
            this.front = 0;
            this.back = 0;
            this.store[this.back] = element;
        } else {
            this.back = (this.back + 1) % this.size;
            this.store[this.back] = element;
        }; 
    }

    dequeue() {
        let temp = null;

        if (this.front === -1) {
            throw newError("Empty Queue!");
        } else if (this.front === this.back) {
           let temp = this.store[this.front];
            this.front = -1;
            this.back = -1;
            return temp;
        } else {
            temp = this.store[this.front];
            this.store[this.front] = null;
            this.front = (this.front + 1) % this.size;
            return temp;
        }
    }

    front() {
        return this.store[this.front];
    }

    size() {
        return this.store.size;
    }

    isEmpty() {
       return this.front === -1;
    }

    toString() {
        let arr;
        if (this.front > this.back) {
            arr = this.store.slice(this.front, this.size).concat(this.store.slice(0, this.back));
        } else {
            arr = this.store
        }
        return JSON.stringify(arr.filter((v) => v !== null));
    }
}

module.exports = Queue;