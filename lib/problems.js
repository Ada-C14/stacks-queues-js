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

    for(let x = 0; x < str.length; x++) {
        const newChar = str.charAt(x);
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
                for(let x = 0; x < 2; x++) {
                    const charToDelete = stack.pop();
                    hash[charToDelete] -= 1;
                }
            }
        }
    }

    return stack.isEmpty();
}

/*
Time Complexity: ?
Space Complexity: ?
*/
const evaluatePostfix = (expr) => {
    const OPERATORS = ['+', '-', '*', '/'];
    const operandsQueue = new Queue;
    const operatorsQueue = new Queue;
    let result = null;
    let operand1 = null;

    for(let x = 0; x < expr.length; x++) {
        const currentChar = expr.charAt(x);
        if (OPERATORS.includes(currentChar)) {
            operatorsQueue.enqueue(currentChar);
        } else {
            operandsQueue.enqueue(parseInt(currentChar));
        }
    }

    // console.log(operatorsQueue);
    // console.log(operandsQueue);

    for(let x = 0; x < operatorsQueue.size(); x++) {
        if (operand1 == null) {
            operand1 = operandsQueue.dequeue();
        }
        let operator = operatorsQueue.dequeue();
        let operand2 = operandsQueue.dequeue();
        console.log(String(operand1) + operator + String(operand2));
        operand1 = evaluateOperands(operator, operand1, operand2);
        result += operand1;
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
            return operand1 / operand2;
    }
}


exports.balanced = balanced;
exports.evaluatePostfix = evaluatePostfix;
