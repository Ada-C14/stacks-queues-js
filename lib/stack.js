const LinkedList = require('./linked-list')

class Stack {
    constructor() {
        this.store = new LinkedList;
    }

    push(item) {
        this.store.addFirst(item);
    }

    pop() {
        const first = this.store.getFirst();
        this.store.delete(first);
        return first;
    }

    isEmpty() {
        return this.store.isEmpty();
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;