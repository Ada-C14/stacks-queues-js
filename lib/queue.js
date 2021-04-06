const LinkedList = require("./linked-list");
//Using a circular buffer with an internal array starting at 20 elements

class Queue {
    constructor() {
        this.store = new Array(20);
    }

    enqueue(value) {
        let nextAvail = 0;
        while (!!this.store[nextAvail]) {
            nextAvail++;
        }
        if (nextAvail > this.size()) {
            const newArray = new Array(this.size() * 2);
            this.deepCopyArray(newArray);
        }
        this.store[nextAvail] = (value);
        return this.store[nextAvail];
    }

    dequeue() {
        const newSize = Math.max(20, this.size());
        const newArray =  new Array(newSize);
        const popped = this.store[0];

        this.deepCopyArray(newArray);

        return popped;
    }

    deepCopyArray(newArray) {
        for(let i = 0; i < this.size(); i++) {
            newArray[i] = this.store[i+1];
        }
        this.store = newArray;
    }

    front() {
        return this.store[0];
    }

    size() {
        let count = 0;
        while (!!this.store[count]) {
            count++;
        }
        return count;
    }

    isEmpty() {
        if (this.front() == null) {
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