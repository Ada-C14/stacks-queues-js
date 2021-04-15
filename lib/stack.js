const LinkedList = require("./linked-list");

class Stack {
    constructor() {
        this.store = new LinkedList;
    }

    push(value) {
        this.store.addLast(value);
        return this.store.getLast();
    }

    pop() {
        const popped = this.store.getLast();
        this.store.delete(popped);
        return popped;
    }

    peek() {
        return this.store.getLast();
    }

    isEmpty() {
        if (this.store.length() == 0) {
            return true;
        } else {
            return false;
        }
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;