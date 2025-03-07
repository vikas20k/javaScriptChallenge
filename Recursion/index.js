// Task 1 Write a recursive function to calulate the factorial of a number .log the result for a few test cases.
function factorial(num) {
    if (num === 0 || num === 1) {// base case
        return 1
    }
    return num * factorial(num - 1)

}
console.log(factorial(5))

// Task 2 Write a recudive to calculate the nth fibonacci number log the result for a few test cases.
function fibonacci(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2)

    }

}
console.log(fibonacci(10))
// second method
function printFibonacciRecursively(a, b, n) {
    if (n > 0) {
        console.log(a);
        printFibonacciRecursively(b, a + b, n - 1);
    }
}

let n = 10; // Number of Fibonacci numbers to print
//printFibonacciRecursively(0, 1, n);

// Task 3 Write a recursive function to find the sum of all element in an array. log the result for few test caser.
function sumArr(arr) {
    if (arr.length === 0) {
        return 0
    }
    return arr[0] + sumArr(arr.slice(1))

}
console.log(sumArr([10, 20, 30]))

// Task 4 Write a recursive function to find the maximum element in an array. log the result for a few text cases.
function findMax(arr) {
    if (arr.length === 1) {
        return arr[0]
    }

    const maxNum = findMax(arr.slice(1))

    return maxNum > arr[0] ? maxNum : arr[0]
}
console.log(findMax([10, 20, 30, 150]))

const str = "vikas"
console.log(str.slice(0, -2))

// Task 5 write a recusive function to reverse a string. log the result for a few test cases.
// Task 6 Write a recusive function to check if a string is a palindrome. log the result for a few test cases.