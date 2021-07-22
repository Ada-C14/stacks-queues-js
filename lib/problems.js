const Stack = require('./stack')

/*
Time Complexity: ? O(n) worst, if every node is visited
Space Complexity: ? O(n) worst, if every char goes on to the stack
*/
const balanced = (str) => {
    const stack = new Stack();
    const pairs = { 
        '{': '}',
        '[': ']',
        '(': ')'
    }

    for (const char of str) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            const topChar = stack.pop();
            if (pairs[topChar] !== char) {
                return false;
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
    throw new Error("This method has not been implemented!");
}

exports.balanced = balanced;
exports.evaluatePostfix = evaluatePostfix;

