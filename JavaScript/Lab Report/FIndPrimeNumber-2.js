function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function findPrimesInRange(start, end) {
    const primes = [];

    for (let number = start; number <= end; number++) {
        if (isPrime(number)) {
            primes.push(number);
        }
    }

    return primes;
}

const primeNumbers = findPrimesInRange(1, 100);
console.log("Prime Numbers between 1 and 100:", primeNumbers);
