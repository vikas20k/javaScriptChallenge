// Task 1 Write a function that return another function where the inner function where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outer() {
    const name = "vikas kumar"
    function inner() {
        console.log(name)
    }
    inner() // lexical scoping
}
outer()


// Task 2 Create a closure that captures a user's name and returns a functons that greets the user by name.
function fun() {
    const userName = "Rahul Kumar"
    function greet() {
        console.log(userName)
    }
    return greet
}
const myfun = fun() // closures
myfun()

// Task 3 Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generatId() {
    let Id = 2341
    return function () {
        Id += 1000
        console.log(Id)
    }
}

const myGeneratId = generatId()
myGeneratId()
myGeneratId()

// Task 4 Create a closure that captures a user's name and returns a functions that greets the user by name.

function userName(name) {
    return function () {
        console.log(`Hellow! ${name}`)
    }
}

const myUserName = userName("vikas kumar")
const yourUserName = userName("Amit kumar")

yourUserName()
myUserName()

// Task 5 Write a loop that crates an array of functions. Each function should log its index when called Use a clousers to enure each functions logs the correct index.
function createArray(size) {
    const array = []

    for (let i = 0; i <= size; i++) {
        array.push(function () {
            console.log(i)
        })
    }
    return array;
}

const mycreateArray = createArray(5)
mycreateArray[3]()
mycreateArray[5]()

// Task 6 Use closures to create a simple module for managing a collection of items. implement methods to add, remove and list items.
const itemManager = (function () {
    let items = []
    return {
        addItem: function (item) {
            items.push(item)
            console.log(`${item} addded`)
        },
        removeItem: function (item) {
            const index = items.indexOf(item)
            if (index !== -1) {
                items.splice(index, 1)
                console.log(`${item} removed`)
            } else {
                console.log(`${item} not found`)
            }
        },
        listItems: function () {
            if (items.length > 0) {
                console.log('Items in the collection')
                items.forEach((item, index) => {
                    console.log(`${index + 1}. ${item}`)
                })
            } else {
                console.log("NO items in the collection.")
            }

        }

    }

})();

// itemManager()
itemManager.addItem("apple")
itemManager.addItem("banana")
itemManager.listItems()
itemManager.removeItem("apple")
itemManager.listItems()
itemManager.removeItem("apple")


// Task 7 Write a function that memoizez the result of another function. Use a closure to store the result of previous computations.