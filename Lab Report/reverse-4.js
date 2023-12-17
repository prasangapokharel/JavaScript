function reverseString(input) {
    let reversed = "";
    let index = input.length - 1;

    do {
        reversed += input[index];
        index--;
    } while (index >= 0);

    return reversed;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(`Original: ${originalString}\nReversed: ${reversedString}`);
