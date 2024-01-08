function calculateFactorial(number) {
    if (number < 0) {
        return "Factorial is undefined for negative numbers.";
    } else if (number === 0 || number === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

// Test the function with different numbers
const testNumbers = [5, 7, 10];
testNumbers.forEach(number => {
    console.log(`Factorial of ${number}: ${calculateFactorial(number)}`);
});
