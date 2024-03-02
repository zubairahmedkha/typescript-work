
// Define functions for basic math operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error! Division by zero.";
    }
    return a / b;
}

// Calculator function to use the basic math operations
function calculator(operation, a, b) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return "Invalid operation";
    }
}

// Example usage
console.log(calculator('add', 5, 3));       // Output: 8
console.log(calculator('subtract', 10, 4)); // Output: 6
console.log(calculator('multiply', 7, 2));  // Output: 14
console.log(calculator('divide', 20, 4));   // Output: 5
console.log(calculator('divide', 10, 0));   // Output: "Error! Division by zero."
