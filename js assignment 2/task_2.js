function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b !== 0) {
                return a / b;
            } else {
                return 'Error: Division by zero';
            }
        default:
            return 'Error: Invalid operation';
    }
}


console.log(calculate(10, 15, 'add'));
console.log(calculate(10, 25, 'subtract'));
console.log(calculate(10, 55, 'multiply'));
console.log(calculate(10, 15, 'divide'));
console.log(calculate(10, 0, 'divide'));
console.log(calculate(10, 5, 'modulus'));