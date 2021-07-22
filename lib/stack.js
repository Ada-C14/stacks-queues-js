const LinkedList = require('./linked-list')

class Stack {
    constructor() {
        this.store = new LinkedList();
    }

    push(value) {
        this.store.addFirst(value);
    }

    pop() {
        const value = this.store.getFirst();
        this.store.delete(value);
        return value;
    }

    isEmpty() {
        return this.store.isEmpty();
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;