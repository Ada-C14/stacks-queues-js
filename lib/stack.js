class Stack {
    constructor() {
        // this.store = ...
        this.items = []
        this.count = 0
    }

    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count++
        return this.count - 1
    }

    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count--
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    isEmpty() {
       return this.count == 0
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