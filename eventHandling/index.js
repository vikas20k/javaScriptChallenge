// Task 1 Add a click event listener to a button that change the text content of a paragraph.
const changeText = document.querySelector('#changetext')

changeText.addEventListener("click", () => {
    const task1 = document.querySelector("#task1")
    task1.textContent = "My name is vikas kumar."

})

// Task 2 Add a double-click event listener to an image that toggles its visibility.
const url = "https://tse1.mm.bing.net/th?id=OIP.BDjyRg0u5NYfG1dqb8ollwHaE2&pid=Api&P=0&h=180"
const url1 = "https://tse1.mm.bing.net/th?id=OIP.4XB8NF1awQyApnQDDmBmQwHaEo&pid=Api&P=0&h=180"
const img = document.querySelector("#img")
let f = 1
// console.log(img)
img.addEventListener("dblclick", () => {
    if (f === 1) {
        img.setAttribute("src", url)
        f = 0
    }
    else {
        img.setAttribute("src", url1)
        f = 1
    }
})
// Task3 : Add a mouseover event listener to an element that changes its background color.
const task3 = document.querySelector(".task3")

task3.addEventListener("mouseover", () => {
    task3.style.backgroundColor = "blue"
})

// Task4 : Add a mouseout event listener to an element that resets its background color.
task3.addEventListener("mouseout", () => {
    task3.style.backgroundColor = "red"
})


// Task5 : Add a keydown event listener to an input field that longs the key pressed to the console.
const task5 = document.querySelector(".task5")
task5.addEventListener("keydown", (event) => {
    console.log(event.key)
})

// Task 6 : Add a keyup enent listener to an input field that displays the current value in a paragraph.
const data = document.querySelector(".task6Data")
task5.addEventListener("keyup", (event) => {
    data.textContent = task5.value
})

// Task 7 : Add a submit event listener to a form that prevents the default submission and longs the form data to the console.
const submit = document.querySelector("#myform")
submit.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(submit)
    console.log(formData)
    formData.forEach((value, key) => {
        const result = `${key}  ${value}`
        console.log(result)
    })
})
// Task 8 : Add a change event listener to a select dropdown that displays he select vaule in a paragraph.
const selectFrom = document.querySelector('#selectFrom')
selectFrom.addEventListener("change", (event) => {
    const result = document.querySelector('#result')
    const select = event.target.value
    result.textContent = select
})

// Task9 : Add a click event listener to a list that logs the text content of the clicked lists item using event delegation.
const ulList = document.querySelector("#ullist")
// console.log(ulList)//
ulList.addEventListener('click', (event) => {
    if (event.target.tagName == "LI") {
        console.log(event.target.textContent)

    }
})

// Task 10 Add event listener to a parent element that listens for from dynamically added child elements.
const li = document.createElement('li')
li.textContent = "Amit"
ulList.appendChild(li)