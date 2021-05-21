const LinkedList = require('./linked-list')

class Stack {
    constructor() {
        // this.store = ...
        this.store = new LinkedList;
        // this.count = 0
    }

    push(item) {
        // this.items[this.count] = element
        // console.log(`${element} added to ${this.count}`)
        // this.count++
        // return this.count - 1
        this.store.addFirst(item)
    }

    pop() {
        // if(this.count == 0) return undefined
        // let deleteItem = this.items[this.count - 1]
        // this.count--
        // console.log(`${deleteItem} removed`)
        // return deleteItem
        const deleteFirst = this.store.getFirst();
        this.store.delete(deleteFirst)
        return deleteFirst
    }

    isEmpty() {
        return this.store.isEmpty();
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;


// const stack = new Stack()
// stack.push(100)
// stack.push(200)
// stack.push(300)

// stack.pop()
// stack.pop()
// stack.pop()
// console.log(stack.pop())