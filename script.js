"use strict";

// Type coercion

let a = 33; //typeof varible is number
let b = '2';//typeof varible is sting

let c = a+b ;//a varible converted into string
let d = a+ +b //b varible is converted into number
console.log(c)
console.log(d)

// type coercion refers to the process of automatic or implicit conversion
// of the values from one data type to another


// Hoisting

// Hoisting is the default behaviour where all function and variable declaration moved to top
console.log(e)
var e = 10;
// console.log(f)
let f = 10;
// let and const variable is not hoisted you will get error

// Self - Invoking Function
{
    function Selfinvoking(f,l){
        console.log(f ,l)
    }Selfinvoking("tect","interview")
}

// This funtion is a type of function that is invoked or called automatically after its definition

// Anonymous function
// Anonymous function are also known as function expression
// it is a function that has no name
// These function are declared dynamically at runtime using the function operator
// To call this function we need to use variable or property along with();
let fun = function(){
    console.log("js interview")
}
fun()

// Print middle character of a string even string both middle value and odd string middle value only

function getMidddleValue(str){
    const L = str.length;
    const M = parseInt(L/2)
    if(L%2 === 0){
        console.log(str[M - 1], str[M])
    }else{
        console.log(str[M])
    }
}
let astr = "deshmukh"
getMidddleValue(astr)


// currying in js

// curried function are constructed by chanining clocres and by defining and immediately
// returning their inner function simultaneously

function getCurrin(a) {

    return function(b){

        return function(c){
            return a+b+c
        }
    }
    
}
console.log(getCurrin(2)(4)(9))

// Explain closure in js
// This ability of a function to store a variable for function
// reference even after it is executed is called closure

function getName(){
    const n = "js"
    function displayFM(){
        console.log(n)
    }
    return displayFM;
}
let clo = getName()
clo()

// How to reverse a number is js obj - need to reverse the give number
// 12321234 and output should be a number 43212321

let num =  12321234
let revnum = num.toString().split('').reverse().join('');
console.log(parseInt(revnum))