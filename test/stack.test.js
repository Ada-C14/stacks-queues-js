const Stack = require("../lib/stack");

describe('test stack implementation', () => {
    it("creates a queue", () => {
        const stack = new Stack();
        expect(stack).toBeInstanceOf(Stack);
    });

    it("pushes to an empty stack", () => {
        const stack = new Stack();
        stack.push(10);
        expect(stack.pop()).toEqual(10);
    });

    it("pushes multiple items to an empty stack", () => {
        const stack = new Stack();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        expect(stack.pop()).toEqual(30);
        expect(stack.pop()).toEqual(20);
        expect(stack.pop()).toEqual(10);
    });

    it("starts the stack empty", () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toEqual(true);
    });

    it("can remove something from the stack", () => {
        const stack = new Stack();
        stack.push(5);
        const removed = stack.pop();
        expect(removed).toEqual(5);
        expect(stack.isEmpty()).toEqual(true);
    });

    it('removes things in the right order (FIFO)', () => {
        const stack = new Stack();
        stack.push(5);
        stack.push(3);
        stack.push(7);
        const removed = stack.pop();
        expect(removed).toEqual(7);
    });
});
