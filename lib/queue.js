const maxCapacity = 20;
class Queue {
    constructor() {
        // this.store = ...
        this.store = new Array(maxCapacity)
        this.head = 0
        this.tail = 0
    }

    enqueue(data) {
        //make sure queue is not full (size set at 20)
        if(this.isFull()) {
            console.log(this.size + this.isFull)
            throw new Error("Sorry, Queue is full!")
        } else {
            this.store[this.tail] = data
            console.log(this.store)
            this.tail = (this.tail + 1) % maxCapacity;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return
        } else {
            const data = this.store[this.head]; // data is equal to head
            this.store[this.head] = null;
            this.head = (this.head + 1) % maxCapacity
            console.log(this.size + "SIZZZEEE")
            return data;
        }
    }

    front() {
        return this.store[this.head]

    }

    isFull(){
        return this.head === (this.tail + 1) % maxCapacity
       
    }

    size() {
        let count = 0;
        let pointer = this.head;

        while (this.store[pointer]) {
            count++;
            pointer = (pointer + 1) % maxCapacity;
        }

        return count;
    }

    isEmpty() {
        return this.head === this.tail
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

// const q = new Queue();
// q.enqueue(10);
// q.enqueue(20);
// // console.log(q)
// q.dequeue();
// q.dequeue();
// // console.log(q)
       
//         q.enqueue(10);
//         q.enqueue(20);
//         q.enqueue(30);
//         q.dequeue;
//         q.dequeue;
//         q.enqueue(40);
//         q.enqueue(50);
//         q.enqueue(60);
//         q.enqueue(70);
//         q.enqueue(80);
//         q.enqueue(90);
//         q.enqueue(100);
//         q.enqueue(110);
//         q.enqueue(120);
//         q.enqueue(130);
//         q.enqueue(140);
//         q.enqueue(150);
//         q.enqueue(160);
//         q.enqueue(170);
//         q.enqueue(180);
//         q.enqueue(190);
//         q.enqueue(200);
//         q.enqueue(210);
//         q.dequeue();
//         console.log(q.toString())