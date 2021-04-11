const Stack = require("./stack");
const Queue = require("./queue");

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
const balanced = (str) => {
    const stack = new Stack;
    const CLOSING_BRACES = [']', '}', ')'];
    const hash = {};
    let isOpeningBracePresent= false;

    for(let i = 0; i < str.length; i++) {
        const newChar = str.charAt(i);
        stack.push(newChar);
        if (hash[newChar]) {
            hash[newChar] += 1;
        } else {
            hash[newChar] = 1;
        }
        if (CLOSING_BRACES.includes(newChar)) {
            switch(newChar){
                case CLOSING_BRACES[0]:
                    isOpeningBracePresent = hash['['];
                    break;
                case CLOSING_BRACES[1]:
                    isOpeningBracePresent = hash['{'];
                    break;
                case CLOSING_BRACES[2]:
                    isOpeningBracePresent = hash['('];
                    break;
            }

            if (isOpeningBracePresent) {
                for(let i = 0; i < 2; i++) {
                    const charToDelete = stack.pop();
                    hash[charToDelete] -= 1;
                }
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
