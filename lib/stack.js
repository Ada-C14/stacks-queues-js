const LinkedList = require("./linked-list");

class Stack {
    constructor() {
      this.store = new LinkedList();
    }

    push(value) {
      this.store.addFirst(value);
    }

    pop() {
      let first = this.store.getFirst();

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