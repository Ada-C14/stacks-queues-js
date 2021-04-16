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
        if (openers[char]) {
            stack.push(char);
        } else { // the char is a closer
            // pop off of the stack to see if it's the correct opener
            if (openers[stack.pop()] !== char) return false;
        }
    }

    return stack.isEmpty();
}

/*
Time Complexity: ?
Space Complexity: ?
*/
const evaluatePostfix = (expr) => {
    throw new Error("This method has not been implemented!");
}

exports.balanced = balanced;
exports.evaluatePostfix = evaluatePostfix;
