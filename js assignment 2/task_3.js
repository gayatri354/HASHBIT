function findTax(salary) {
    let tax = 0;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;
        case (salary > 1500000):
            tax = salary * 0.30;
            break;
        default:
            tax = 0;
            break;
    }

    return tax;
}

// Example usage:
console.log(findTax(450000)); // Output: 0
console.log(findTax(750000)); // Output: 75000
console.log(findTax(1250000)); // Output: 250000
console.log(findTax(2000000)); // Output: 600000