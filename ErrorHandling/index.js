// Task 1 Write a function that intentionly throw an error and use a try -catch block to handle the error and log an appropiate message to the console.
function handleError() {
    try {
        throw new Error("Some thing is wrong")
    } catch (error) {
        console.log("your error " + error.message)
    }
}
handleError();

// Task 2 Create a function that divides two numbers and throws an error if the denominator is zero.Use a try catch block to handle this error.
function divides(num, num1) {
    try {
        if (num % num1 === 0) {
            throw new Error("divvides two numbers and denominator is zero;")
        }
        result = num % num1
        console.log(result)

    } catch (error) {
        console.log("your second task error " + error.message)
    }
}

divides(15, 5)

// Task 3 Write a script that include a try catch and a finlly block. log message in the try catch and finally block to abserve the execution flow

function finallyBlock(data) {
    try {
        if (true) {
            throw new Error("check of work flow try, catch, finally")
        }

    }
    catch (error) {
        console.log(`task 3 + ${error.message}`)
    }
    finally {
        console.log('work is done')
    }
}
console.log(finallyBlock(true))

// Task 4 Create a custom error class that extends the bulit in error class throw  an instance of this error  in a functio and  handle it using a try catch block



// Task 5 Write a function that validates  user input ( checking if a string is not empty) and throws a custom error if the validation fails. handles the custom error using a try catch
function task5(data) {
    try {
        if (data == '') {
            throw new Error('your data input is emity')
        }
        console.log("your data" + data)
    }
    catch (error) {
        console.log(error.message)
    }
}
task5('')

// Task 6 create a promise that randomly resolves or reject Use catch to handle the rejection and log an appropiate message to the console.

const promise = new Promise((reponse, reject) => {
    const result = Math.random()
    result > 0.5 ? reponse("your code is work") : reject("your api is not work")
})

promise.then(message => console.log(message))
    .catch(err => console.log("your err " + err))


// Task 7 Use try catch within an async function to handle error from a promise that randomly resolves or reject and log the error message.

const handlePromise = async () => {
    try {
        const result = await promise()
        console.log(result)
    } catch (error) {
        console.error("task 7 error " + error.message)
    }

}
handlePromise()

// Task 8 Use the fetch APi to resquest data from an invaid URL and havle the error using catch log  log an appropriate error message to the console.
console.log("----------------------------------------------")

fetch('https://invalid-url.example.com')
    .then(response => {

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error.message);
    });

