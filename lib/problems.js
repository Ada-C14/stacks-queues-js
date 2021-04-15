const Stack = require("./stack");
const Queue = require("./queue");

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
const balanced = (str) => {
    const stack = new Stack;
    const OPENING_BRACES = ['[', '{', '('];
    const CLOSING_BRACES = [']', '}', ')'];
    let prevChar = null;

    for(let i = 0; i < str.length; i++) {
        const newChar = str.charAt(i);
        prevChar = stack.peek();

        stack.push(newChar);

        if (CLOSING_BRACES.includes(newChar)) {
            switch(newChar){
                case CLOSING_BRACES[0]:
                    if (prevChar == OPENING_BRACES[0]) {
                        stack.pop();
                        stack.pop();
                    }
                    break;
                case CLOSING_BRACES[1]:
                    if (prevChar == OPENING_BRACES[1]) {
                        stack.pop();
                        stack.pop();
                    }
                    break;
                case CLOSING_BRACES[2]:
                    if (prevChar == OPENING_BRACES[2]) {
                        stack.pop();
                        stack.pop();
                    }
                    break;
            }
        }
    }

    return stack.isEmpty();
}

/*
Time Complexity: O(n) 
Space Complexity: O(n)
*/
const evaluatePostfix = (expr) => {
    const OPERATORS = ['+', '-', '*', '/'];
    const operandsQueue = new Queue;
    const operatorsQueue = new Queue;
    let result = null;
    let operand1 = null;

    for(let i = 0; i < expr.length; i++) {
        const currentChar = expr.charAt(i);
        if (OPERATORS.includes(currentChar)) {
            operatorsQueue.enqueue(currentChar);
        } else {
            operandsQueue.enqueue(parseInt(currentChar));
        }
    }

    const numOperators = operatorsQueue.length();

    for(let i = 0; i < numOperators; i++) {
        if (operand1 == null) {
            operand1 = operandsQueue.dequeue();
        } else {
            operand1 = result;
        }
        let operator = operatorsQueue.dequeue();
        let operand2 = operandsQueue.dequeue();
        result = evaluateOperands(operator, operand1, operand2);
    }

    return result;
}

function evaluateOperands(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return parseInt(operand1 / operand2);
    }
}


exports.balanced = balanced;
exports.evaluatePostfix = evaluatePostfix;
