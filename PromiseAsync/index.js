// Task 1 : Create that resolves with a message after a 2-seconds timeout and log the message to the console.
const task1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("hellow vikas kumar")
    }, 2000);
})
task1.then(message => console.log(message))

// Task 2 : Create a promise that reject with an error message after a 2second timeout and handle the error using catch.

const task2 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("hellow vikas")
        rej('something wrong')
    }, 2000)
})

task2.then(message => console.log(message))
    .catch(err => console.log(err))

// Task 3 Create a sequence of promises that simulate fetching data from a server.chain the promises to log messages in specific order.

function chainFun1() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("Fist Promise is complete")
            reject("error in fist promise")
        }, 1000)
    })
}

function chainFun2() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("Second  Promise is complete")
            reject("error in second promise")
        }, 500)
    })
}


function chainFun3() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("third  Promise is complete")
            reject("error in third promise")
        }, 1500)
    })
}


chainFun1()
    .then((message) => {
        console.log("fist", message)
        return chainFun2()
    })
    .then((message) => {
        console.log("second", message)
        return chainFun3()
    })
    .then(message => console.log('third', message))
    .catch((err) => console.log(err))

// Task 4 Write an async function that waits for a promise to reslove and then logs the resolved value.
// Task 5 Wrirte an async function that handles a reject using try and catch and logs the error message.

async function asyncPromise(data) {
    try {
        const result = await data
        console.log(result)
    } catch (error) {
        console.error("your Promise is fail", error)
    }
}

const exampleOfPro = new Promise((resolve, reject) => {
    // resolve("your task is complete no.4")
    reject("your task is uncomplete no.4")
})
asyncPromise(exampleOfPro)

// Task 6 Use the fetch API to get data from a public Api and log the respnse data to the console using promises.
const url = 'https://jsonplaceholder.typicode.com/posts';

function fetchData(datas) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json()

        })
        .then(data => console.log(data[datas].id))
        .catch(error => console.log('api is not work', error))
}

fetchData('0')


// Task 7 Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchData1(data) {
    try {
        const fetchUrl = await fetch(url)
        const fetchData = await fetchUrl.json()
        console.log(fetchData[data].title)
    }
    catch (err) {
        console.log(err)
    }


}

fetchData1('0')

//Task7 Use Promise.all to wait for multiple promise to resolve and then log all their values.
const promise1 = new Promise((res) => setTimeout(() => res("promise1 reslove"), 3000))
const promise2 = new Promise((res) => setTimeout(() => res("promise2 reslove"), 1500))
const promise3 = new Promise((res) => setTimeout(() => res("promise3 reslove"), 4000))


Promise.all([promise1, promise2, promise3])
    .then(result => console.log(result))
    .catch(err => console.log(err))

// Task 8 Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1, promise2, promise3])
    .then(result => console.log(result))
    .catch(err => console.log(err))