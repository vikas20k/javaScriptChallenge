import { sumoofNum } from "./sumNum.mjs";
import { obj } from "./sumNum.mjs";
import { addfun, subfun, mulfun, divfun } from "./multipalFunction.mjs";
import defaultFun from "./sumNum.mjs";
import * as fun from "./module.mjs"
import _ from "lodash"
import axios from 'axios';

// task1 Create a module that exports a function to add two numbers.import and use this modules in another script.
console.log(sumoofNum(10, 20))

// Task 2 Create a module that exports an object represnting a person with properties and methods. Import and use this module in another script.
console.log(obj.name)
console.log(obj.fun())

// Task 3 Create a module that exports multiple function using named exports. import and use these functions in another script.
console.log(addfun(100, 10))
console.log(subfun(100, 10))
console.log(mulfun(100, 10))
console.log(divfun(100, 10))

// Task 4 Create a module that exports a single function using default export import and use this functions in another script.
console.log(defaultFun('hello my name is vikas'))


// Task 5 Create a module that exports multiple constants and functions. import the entire module as an object in another script and use its properties.
try {

    console.log(fun.addfun(100, 10))
    console.log(fun.subfun(100, 10))
    console.log(fun.mulfun(100, 10))
    console.log(fun.divfun(100, 10))
} catch (err) {
    console.error('task5 ' + err.message);

}


// Task 6 install a third party midule lodash usnin npm. import and use a functioj from this module in a script.

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const chunkOfarr = _.chunk(arr, 5) //Creates an array of elements split into groups the length of size
console.log(chunkOfarr)// not change orignal arrary
//console.log(arr)

const arr1 = [1, 2, 3, false, 4, 5, null, '', undefined, 0]
const compactofArr = _.compact(arr1) //Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey
console.log(compactofArr)// not change orignal value.
//console.log(arr1)

const concetArr = _.concat(arr, 10, 20, 30)
console.log(concetArr)// not change orignal value.
//console.log(arr)

const diffrenceArr = _.difference(arr1, arr)
console.log(diffrenceArr)


// Task 7 Install a third-party module (axios) using npm. import and use this module to make a network request in a script.

// async function axiosFun(arr) {
//     try {
//         const datas = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
//         console.log(datas.data.data[0]?.Year)

//     } catch (err) {
//         console.error('task 7 your api is not work' + err.message)
//     }

// }
// axiosFun()


// second method promise -------------------------------------------------------------------------------
axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(response => console.log(response.data.data[0]))
    .catch(error => console.log(error.message))

// Task 8 Use a module bundler like webpack or parcel to bundle multiple javaScript files int a single file. Write a script to demonstrate the bundling process.