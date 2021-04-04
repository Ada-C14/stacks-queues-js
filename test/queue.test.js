const Queue = require("../lib/queue");

describe("test queue implementation", () => {
    it("creates a queue", () => {
        const q = new Queue();
        expect(q).toBeInstanceOf(Queue);
    });

    it("adds to an empty queue", () => {
        const q = new Queue();
        q.enqueue(10);
        expect(q.toString()).toEqual("[10]")
    });

    it("adds multiple items to an empty queue", () => {
        const q = new Queue();
        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        expect(q.toString()).toEqual("[10,20,30]");
    });

    it("starts the queue empty", () => {
        const q = new Queue();
        expect(q.isEmpty()).toEqual(true);
    });

    it("can remove something from the queue", () => {
        const q = new Queue();
        q.enqueue(5);
        const removed = q.dequeue();
        expect(removed).toEqual(5);
        expect(q.isEmpty()).toEqual(true);
    });

    it("is empty after all elements are removed", () => {
        const q = new Queue();
        q.enqueue(5);
        q.enqueue(6);
        expect(q.dequeue()).toEqual(5);
        expect(q.dequeue()).toEqual(6);
        expect(q.isEmpty()).toEqual(true);
    });

    it('removes things in the right order (LIFO)', () => {
        const q = new Queue();
        q.enqueue(5);
        q.enqueue(3);
        q.enqueue(7);
        const removed = q.dequeue();
        expect(removed).toEqual(5);
        expect(q.toString()).toEqual("[3,7]");
    });

    it('properly adjusts size with enqueueing and dequeueing', () => {
        const q = new Queue();
        expect(q.isEmpty()).toEqual(true);
        q.enqueue(-1);
        q.enqueue(-60);
        expect(q.isEmpty()).toEqual(false);
        q.dequeue();
        q.dequeue();
        expect(q.isEmpty()).toEqual(true);
    });

    it('returns the front element of the queue', () => {
        const q = new Queue();
        q.enqueue(40);
        q.enqueue(22);
        q.enqueue(3);
        q.dequeue();
        expect(q.dequeue()).toEqual(22);
    });

    it('works with a large queue', () => {
        const q = new Queue();
        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        expect(q.dequeue()).toEqual(10);
        expect(q.dequeue()).toEqual(20);
        q.enqueue(40);
        q.enqueue(50);
        q.enqueue(60);
        q.enqueue(70);
        q.enqueue(80);
        q.enqueue(90);
        q.enqueue(100);
        q.enqueue(110);
        q.enqueue(120);
        q.enqueue(130);
        q.enqueue(140);
        q.enqueue(150);
        q.enqueue(160);
        q.enqueue(170);
        q.enqueue(180);
        q.enqueue(190);
        q.enqueue(200);
        q.enqueue(210);
        q.dequeue();
        expect(q.toString()).toEqual('[40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210]');
    });

});