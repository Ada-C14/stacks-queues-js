const Stack = require("./stack");

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
// const evaluatePostfix = (expr) => {
//     throw new Error("This method has not been implemented!");
// }

exports.balanced = balanced;
exports.evaluatePostfix = evaluatePostfix;
