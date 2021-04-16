const Stack = require('./stack');
/*
Time Complexity: O(n), the function has to visit every node once
but operations performed in that loop are O(1)
Space Complexity: O(n), worst case scenario the stack could have on it
every character in the string
*/
const balanced = (str) => {
    const stack = new Stack();
    const pairs = { '{': '}', '[': ']', '(': ')' }

    for (const char of str) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (!(pairs[top] === char)) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}

/*
Time Complexity: O(n), the function has to check every character in expr,
but operations in the for loop are O(1)
Space Complexity: O(n), the controlling factor is the height of the stack,
which does not grow quickly with longer expr in a normal use case but I suppose
in a worst case scenario with some weird postfix expressions would increase in size
linear to the length of the weird expression you were using
*/
const evaluatePostfix = (expr) => {
    const stack = new Stack();

    for (const char of expr) {
        const current = parseInt(char);
        if (Number.isInteger(current)) {
            stack.push(current);
        } else {
            const second = stack.pop();
            const first = stack.pop();

            if (char === '+') {
                stack.push(first + second);
            } else if (char === '-') {
                stack.push(first - second);
            } else if (char === '*') {
                stack.push(first * second);
            } else if (char === '/') {
                const quotient = first / second;
                quotient > 0 ? stack.push(Math.floor(quotient)) : stack.push(Math.ceil(quotient))
            }
        }
    }

    return stack.pop();
}

exports.balanced = balanced;
exports.evaluatePostfix = evaluatePostfix;
