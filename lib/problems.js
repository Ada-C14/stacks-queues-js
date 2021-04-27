const Stack = require('./stack')

/*
Time Complexity: O(n) worst case if all are opening brackets
Space Complexity: same as above
*/
const balanced = (str) => {
    const openers = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let stack = new Stack;
    for (const char of str) {
        if (openers[char]) { // the char is an opening bracket
            stack.push(char);
        } else { // the char is a closing bracker
            // pop off of the stack to see if it's the correct opener
            if (openers[stack.pop()] !== char) return false;
        }
    }

    return stack.isEmpty();
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
const evaluatePostfix = (expr) => {
    // assumes only the operators listed below would be given
    // also any non-operator would be an integer
    const operators = {'+': add, '-': subtract, '/': divide, '*': multiply};
    let stack = new Stack;

    for (const char of expr) {
        if (operators[char]) {
            const secondNum = stack.pop();
            const firstNum = stack.pop();

            stack.push(operators[char](parseInt(firstNum), parseInt(secondNum)))
        } else {
            stack.push(char);
        }
    }

    return parseInt(stack.pop());
}

const add = (num1, num2) => {
    return (num1 + num2);
}

const subtract = (num1, num2) => {
    return (num1 - num2);
}

const multiply = (num1, num2) => {
    return (num1 * num2)
}

const divide = (num1, num2) => {
    if (num2 === 0) {
        throw new Error('Cannot divide by 0');
    } else {
        return (num1 / num2);
    }
}

exports.balanced = balanced;
exports.evaluatePostfix = evaluatePostfix;
