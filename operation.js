// Arithmetic Operators
function arithmeticOperations(num1, num2) {
    console.log("Arithmetic Operations:");
    console.log(`Addition: ${num1 + num2}`);
    console.log(`Subtraction: ${num1 - num2}`);
    console.log(`Multiplication: ${num1 * num2}`);
    console.log(`Division: ${num1 / num2}`);
}

// Comparison Operators
function comparisonOperations(num1, num2) {
    console.log("\nComparison Operations:");
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num1} is less than ${num2}`);
    } else {
        console.log(`${num1} is equal to ${num2}`);
    }
}

// Logical Operators
function logicalOperations(value1, value2) {
    console.log("\nLogical Operations:");
    console.log(`AND: ${value1 && value2}`);
    console.log(`OR: ${value1 || value2}`);
    console.log(`NOT: ${!value1}`);
}

// Assignment Operators
function assignmentOperations(initialValue) {
    console.log("\nAssignment Operations:");
    let result = initialValue;
    console.log(`Original Value: ${result}`);

    result += 5;
    console.log(`After += 5: ${result}`);

    result -= 3;
    console.log(`After -= 3: ${result}`);

    result *= 2;
    console.log(`After *= 2: ${result}`);

    result /= 4;
    console.log(`After /= 4: ${result}`);
}

// Increment and Decrement Operators
function incrementDecrementOperations(value) {
    console.log("\nIncrement and Decrement Operations:");
    console.log(`Original Value: ${value}`);
    
    value++;
    console.log(`After Increment (++): ${value}`);
    
    value--;
    console.log(`After Decrement (--): ${value}`);
}

// Test the functions
const num1 = 10;
const num2 = 5;
const comparisonNum1 = 15;
const comparisonNum2 = 20;
const logicalValue1 = true;
const logicalValue2 = false;
const initialValue = 8;
const incrementDecrementValue = 3;

arithmeticOperations(num1, num2);
comparisonOperations(comparisonNum1, comparisonNum2);
logicalOperations(logicalValue1, logicalValue2);
assignmentOperations(initialValue);
incrementDecrementOperations(incrementDecrementValue);
