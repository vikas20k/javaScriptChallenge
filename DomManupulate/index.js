// Task1 Select an HTML elements by its ID and change its text content.
const task1 = document.getElementById('task1')
task1.textContent = "hellow vikas kumar "



// Task2 : Select an HTML element by its class and change its background color.
// ByClassName is a callection of elements array like object  you cannot style direcetly 
// to use [indexNumber ], forEach, loop
const task2 = document.getElementsByClassName('task2')
task2[0].style.backgroundColor = 'blue'

//Task 3 : Create a new div element with some text content and append it to the body.
const appendDiv = document.createElement('div')
appendDiv.innerText = 'hello vikas task2 is complete'

document.body.appendChild(appendDiv)

// Task 4: create a new li element and add it add it to an existing ul list.
const nameList = document.querySelector("#nameList")
const appendLi = document.createElement('li')
appendLi.textContent = "Sunny jha"
nameList.appendChild(appendLi)


// Task 5 : Select an HTML element and and remove it form DOM
const secondEle = nameList.children[1]
secondEle.remove()

// Task 6 Remove the last lastchild of a specific HTML element.
nameList.removeChild(nameList.lastElementChild)

// Task 7 : Select an HTML element and change one of its attributes(eg. src of an img tag)

const img = document.querySelector(".img")
img.setAttribute('src', "https://tse3.mm.bing.net/th?id=OIP.iSu2RcCcdm78xbxNDJMJSgHaEo&pid=Api&P=0&h=180")

// Task 8 : Add and removes a css class to from an HTML element.
const remove = document.querySelector("#remove")
remove.addEventListener("click", () => {
    const ele = document.querySelector("#div")
    console.log(ele)
    ele.classList.remove(".Task8")
})

const add = document.querySelector("#add")
add.addEventListener("click", () => {
    const ele = document.querySelector("#div")
    console.log(ele)
    ele.classList.add(".Task8")
})

// Task 9 Add a click event listenter to a button that change the text content of a paragraph
const change = document.querySelector("#change")
change.addEventListener("click", () => {
    const para = document.querySelector("#para")
    para.textContent = 'hello my name is vikas kumar'
})

// Task 10 Add a mouseover event listener to an element that change its border color.
const task10 = document.querySelector('.task10')

task10.addEventListener('mouseover', () => {
    task10.style.border = "red solid 2px"
})

