// create an array with range of numbers  find the number between 0 t0 5.

function rangeOfArray(starNum, endNum) {
    if (endNum < starNum) {
        return []
    }
    const number = rangeOfArray(starNum, endNum - 1)
    number.push(endNum)
    return number
}
console.log(rangeOfArray(1, 5))

// question palindrome Number
// an integar is a pallindrome when it reads the some forword and backword
// input x 121 -------------------- output true
// input x 10 ---------------------output false

function palindrome(str) {
    const holdStr = str;
    if (str.length <= 1) { // base case
        return true
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    }

    return palindrome(str.slice(1, -1))
}
console.log(palindrome("1131"))

// fibonacci using for loop
function fibonacci(num) {
    const arr = [0, 1]
    for (let i = 2; i <= num; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[num]
}
console.log(fibonacci(5))


// reverse a string 
// input  'Hello'   output 'olleH'

function reverseStr(str) {
    if (str === '') {
        return ''
    }
    return reverseStr(str.substr(1)) + str.charAt(0)
}
console.log(reverseStr("hello"))