"use strict";

// Type coercion

let a = 33; //typeof varible is number
let b = "2"; //typeof varible is sting

let c = a + b; //a varible converted into string
let d = a + +b; //b varible is converted into number
console.log(c);
console.log(d);

// type coercion refers to the process of automatic or implicit conversion
// of the values from one data type to another

// Hoisting

// Hoisting is the default behaviour where all function and variable declaration moved to top
console.log(e);
var e = 10;
// console.log(f)
let f = 10;
// let and const variable is not hoisted you will get error

// Self - Invoking Function
{
    function Selfinvoking(f, l) {
        console.log(f, l);
    }
    Selfinvoking("tect", "interview");
}

// This funtion is a type of function that is invoked or called automatically after its definition

// Anonymous function
// Anonymous function are also known as function expression
// it is a function that has no name
// These function are declared dynamically at runtime using the function operator
// To call this function we need to use variable or property along with();
let fun = function () {
    console.log("js interview");
};
fun();

// Print middle character of a string even string both middle value and odd string middle value only

function getMidddleValue(str) {
    const L = str.length;
    const M = parseInt(L / 2);
    if (L % 2 === 0) {
        console.log(str[M - 1], str[M]);
    } else {
        console.log(str[M]);
    }
}
let astr = "deshmukh";
getMidddleValue(astr);

// currying in js

// curried function are constructed by chanining clocres and by defining and immediately
// returning their inner function simultaneously

function getCurrin(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(getCurrin(2)(4)(9));

// Explain closure in js
// This ability of a function to store a variable for function
// reference even after it is executed is called closure

function getName() {
    const n = "js";
    function displayFM() {
        console.log(n);
    }
    return displayFM;
}
let clo = getName();
clo();

// How to reverse a number is js obj - need to reverse the give number
// 12321234 and output should be a number 43212321

let num = 12321234;
let revnum = num.toString().split("").reverse().join("");
console.log(parseInt(revnum));

// Temporal Dead Zone
// The Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to the
// time between the creation of a variable and its initialization,
// during which accessing the variable results in a specific behavior.
// In JavaScript, when using let or const to declare a variable,
// that variable is hoisted to the top of its scope, but it's not initialized at that point.
// This means you can't access the variable before its declaration because it's in the TDZ. For example:

// console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 10;
console.log(myVar);

// check if an element exists in an array ???

const array = [1, 2, 3, 4, 5];

// Using indexOf
const element = 3;
// console.log(array.indexOf(element))
// if element is get it will return index of that element
// else it return -1
if (array.indexOf(element) !== -1) {
    console.log(`${element} exists in the array.`);
} else {
    console.log(`${element} does not exist in the array.`);
}

// Using includes (introduced in ES2016)
// console.log(array.includes(element))
//if element is found in the array it will return true else it will return false
if (array.includes(element)) {
    console.log(`${element} exists in the array.`);
} else {
    console.log(`${element} does not exist in the array.`);
}

const found = array.find(item => item === element);
// array.find() loops through each item in the array.
// For each item, it checks if item === element is true.
// If any item in the array matches the condition (item === element), find() returns that element (item).
// If no element satisfies the condition, find() returns undefined.

if (found !== undefined) {
    console.log(`${element} exists in the array.`);
} else {
    console.log(`${element} does not exist in the array.`);
}

const exists = array.some(item => item === element);
// The some() method returns true
// if at least one element satisfies the condition (item > 3). Otherwise, it returns false.
if (exists) {
    console.log(`${element} exists in the array.`);
} else {
    console.log(`${element} does not exist in the array.`);
}

// How to search an element in array using linear search

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the element if found
        }
    }
    return -1; // Return -1 if the element is not found in the array
}

const myArray = [3, 7, 1, 4, 9, 2];
const elementToFind = 4;

const result = linearSearch(myArray, elementToFind);

if (result !== -1) {
    console.log(`Element ${elementToFind} found at index ${result}.`);
} else {
    console.log(`Element ${elementToFind} not found in the array.`);
}

// How to remove duplicate item form array

// Using Set:
// One of the easiest ways to remove duplicates is by using Set,
// which automatically eliminates duplicates since it only stores unique values:

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]

// Using filter() and indexOf():
const uniqueArrayFilter = arrayWithDuplicates.filter(
    (item, index) => arrayWithDuplicates.indexOf(item) === index
);
console.log(uniqueArrayFilter); // [1, 2, 3, 4, 5]

// Using reduce():

const uniqueArrayreduse = arrayWithDuplicates.reduce(
    (accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) {
            accumulator.push(currentValue);
        }
        return accumulator;
    },
    []
);
console.log(uniqueArray); // [1, 2, 3, 4, 5]

// Explain sort methods in js

// In JavaScript, arrays have a sort() method that allows you to sort the elements
// of an array in place and return the sorted array.
// The sort() method arranges the elements based on their string representations by
// default and modifies the original array.

// Basic Usage:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Banana', 'Mango', 'Orange']

// Sorting Numbers:
// When sorting numbers, the default behavior might not work as expected. For example,
//  [3, 15, 1, 22] would be sorted as [1, 15, 22, 3] because the elements are compared as strings.

const numbers = [3, 15, 1, 22];
//
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 3, 15, 22]

numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [22, 15, 3, 1]

// Sorting Objects:
const items = [
    { name: "Apple", quantity: 10 },
    { name: "Orange", quantity: 5 },
    { name: "Banana", quantity: 8 }
];

items.sort((a, b) => a.quantity - b.quantity);
console.log(items);
// Output: [{ name: 'Orange', quantity: 5 }, { name: 'Banana', quantity: 8 }, { name: 'Apple', quantity: 10 }]



function longestConsecutive(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const set = new Set(nums);
    let longestStreak = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

const numbersarray = [100, 101, 102, 4, 200, 1, 2, 3, 4, 2];
const longestLength = longestConsecutive(numbers);
console.log("Length of the longest consecutive sequence:", longestLength);


//   In JavaScript, you can check if a given value is an integer using various methods. 
//   One common approach is to use the Number.isInteger() method, which was introduced in ECMAScript 6 (ES6).

const num1 = 5;
const num2 = 5.5;
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

console.log(Number.isInteger(num1)); // Output: true
console.log(Number.isInteger(num2)); // Output: false


// Describe the concept of event bubbling in the dom

// Event bubbling is a key concept in the Document Object Model (DOM)
//  that describes the order in which event handlers are triggered 
//  when an event occurs on a particular element in a web page.
// When an event happens on a DOM element, like a click on a button 
// nested within multiple parent elements, that event doesn't just 
// trigger on the specific element where the event occurred. It also triggers on all of its

document.getElementById("outer").addEventListener("click", function () {
    console.log("Outer div clicked");
});

document.getElementById("middle").addEventListener("click", function () {
    console.log("Middle div clicked");
});

document.getElementById("inner").addEventListener("click", function () {
    console.log("Inner div clicked");
});

document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button clicked");
});


//  Promises are a core feature in JavaScript, especially when dealing with asynchronous operations.
// They're used to handle and manage asynchronous operations in a more manageable
//  and readable way compared to traditional callback-based approaches.

// Promises in JavaScript represent a placeholder for an asynchronous operation. 
// They are objects that represent the eventual completion or failure
//  of an asynchronous operation and allow us to handle the result or error once it's available.


// Pending: The initial state when the promise is created and the asynchronous operation is in progress.
// Fulfilled: The state when the asynchronous operation is completed successfully.
// Rejected: The state when the asynchronous operation fails or encounters an error

// Promises have two main parts:

// Producer: This is the code that performs the asynchronous operation. 
// When the operation completes, it either resolves the promise (fulfillment) or rejects it (failure).

// Consumer: This is the code that handles the result of the asynchronous operation,
//  It uses .then() to specify what to do when the promise is fulfilled and
//  .catch() to handle any errors if the promise is rejected.

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber); // Resolve the promise if the condition is met
        } else {
            reject(new Error('Number is too small')); // Reject the promise otherwise
        }
    }, 1000);
});

// Consuming the promise
myPromise
    .then((result) => {
        console.log('Promise fulfilled with result:', result);
    })
    .catch((error) => {
        console.error('Promise rejected with error:', error);
    });

const MyPromise = new Promise((res, rej) => {

    setTimeout(() => {
        const ranNum = Math.random();
        if (ranNum < 0.5) {
            res(ranNum)
        } else {
            rej(new Error('Number is too High'))
        }
    }, 1000)
})
MyPromise.then((result) => {
    console.log('Promise fulfilled with result:', result);
}).catch((error) => {
    console.error('Promise rejected with error:', error);
})

// A callback is a function that is passed as an argument to another function and is
// intended to be executed after a specific task or event. Callbacks are commonly
//  used in asynchronous operations to ensure that certain code doesn't run until a particular operation has completed.

function fetchData(callback) {
    // Simulating an asynchronous operation, like fetching data from a server
    setTimeout(() => {
        const data = 'This is the fetched data';
        callback(data); // Execute the callback function with the fetched data
    }, 2000);
}

function processData(data) {
    console.log('Processing data:', data.toUpperCase());
}

// Using fetchData with a callback
fetchData(processData);


// Prototypal inheritance is a fundamental concept in JavaScript that describes
// how objects inherit properties and behaviors from other objects.
// Unlike classical inheritance in some other programming languages,
// JavaScript uses prototypal inheritance,
// where objects can directly inherit from other objects.

// At its core, each JavaScript object has an internal link to another object called its prototype.
//  When you access a property or method of an object, JavaScript first checks
//  if that property exists on the object itself. If it doesn't find it,
//  it looks up the prototype chain, following the chain of linked objects until
//  it finds the property or until it reaches the end of
//   the chain (which is usually the base object, such as Object.prototype)


// Asynchronous JavaScript allows code to execute without blocking other operations.
//  In synchronous programming, one operation must complete before moving on to the next.
// Asynchronous programming allows tasks to begin, and the code continues running without waiting for the task to finish.

// Async/Await: Introduced in ES8, async/await provides a more readable and cleaner way to write asynchronous code.
//  async is used to define a function that returns a promise, and await is used to pause the execution of the
//  function until the promise is resolved.

const fetchData2 = () => {
    return new Promise((res, reg) => {
        setTimeout(() => {
            const data = { result: "some data" };
            resolve(data)
        }, 1000);
    });
};

const getDate = async () => {
    try {
        const result = await fetchData2()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// Function Declaration
// A function declaration is defined using the function keyword and
// can be accessed anywhere within its
// scope, even before the function is declared due to hoisting.
// Function Declaration
function greet1() {
    return 'Hello!';
}

// Can be called anywhere in the scope
console.log(greet1()); // Output: Hello!


// Hoisting: Function declarations are hoisted, meaning they can be called before they're defined in the code.


// Function Expression:

// A function expression defines a function as part of an expression or a variable assignment.
//  Function expressions are not hoisted and can only be accessed after they are defined.
// Function Expression
const greet2 = function () {
    return 'Hello!';
};

// Can only be called after the expression
console.log(greet2()); // Output: Hello!

// Arrow functions are a concise way to write functions in JavaScript, introduced
// in ES6 (ECMAScript 2015). They provide a shorter syntax compared to regular
//  function expressions and offer some unique behavior regarding the this keyword and their structure.

// Lexical this binding: Arrow functions do not have their own this context. Instead, they inherit this from the surrounding code.
//  In regular functions, this is determined by how the function is called.

// No arguments object: Arrow functions don’t have their own arguments object like regular functions. Instead, they inherit it from the enclosing scope.44


// Arrow functions are commonly used for short, concise functions, especially when working with array methods or when a straightforward function is needed. 44


// In JavaScript, the this keyword refers to the execution context of a function and represents the context in which a function is executed.
//  Understanding this is crucial because its value can change based on how a function is called.

// Global Context: When this is used in the global scope or outside of any function, it refers to the global object (window in browsers, global in Node.js).
console.log(this === window); // In a browser environment, this will be true

// Function Context: Inside a function, this refers to the object on which the function is called. However, this depends on how the function is invoked:

// Function Context: Inside a function, this refers to the object on which the function is called. However, this depends on how the function is invoked:

function greet() {
    console.log(this === window);
}

greet(); // Output: true (if running in a browser)

// b. Object Method: When a function is a method of an object, this refers to the object that the method is called on.
const person = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Output: Hello, my name is Alice

// c. Explicitly Set this: Using methods like call(), apply(), or bind() allows explicit setting of this.

function introduce(greeting) {
    console.log(`${greeting}, I'm ${this.name}`);
}

const john = { name: 'John' };
introduce.call(john, 'Hi'); // Output: Hi, I'm John

// The call(), apply(), and bind() methods in JavaScript are used to change the context of a function.
//  This means that you can call a function on a different object than the one it was originally defined on.

// The call() and apply() methods both take the function to be called as their first argument,
//  and then any number of arguments to be passed to the function. The difference between the two methods is that call()
//  takes the arguments as a list, while apply() takes them as an array.
// The bind() method is similar to the call() method, but it does not call the function immediately.
//  Instead, it returns a new function that can be called later. The new function will have the same context as the original function,
//   but it can be called on a different object.

// Call the function on a different object
function greet(name) {
    console.log(`Hello, ${name}!`);
}

const person2 = {
    name: 'John Doe',
};

greet.call(person2); // Outputs "Hello, John Doe!"

// Apply the function on a different object with an array of arguments
function add(a, b) {
    return a + b;
}

const numbers2 = [1, 2];

add.apply(null, numbers); // Outputs 3

// Bind the function to a different object
const greetPerson = greet.bind(person);

greetPerson(); // Outputs "Hello, John Doe!"

// In JavaScript, there are several ways to create objects:

// 1. Object Literals
const personObj = {
    name: 'Alice',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

// 2. Constructor Functions

function Person2(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}.`);
    };
}

const alice1 = new Person2('Alice', 30);

// 3. Object.create()

const personProto = {
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

const alice2 = Object.create(personProto);
alice.name = 'Alice';
alice.age = 30;

// ES6 Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const alice = new Person('Alice', 30);


// ES6, also known as ECMAScript 2015, introduced a wide range of new features and improvements to JavaScript. Some of the notable features include:

// 1. **Arrow Functions**: Concise syntax for writing functions.
   
// 2. **let and const**: Block-scoped variables (`let`) and constants (`const`) which offer more predictable scope behavior.

// 3. **Template Literals**: Using backticks (`) to create multi-line strings and interpolate variables within strings.

// 4. **Destructuring Assignment**: Easily extract array elements or object properties into variables.

// 5. **Default Parameters**: Assign default values to function parameters.

// 6. **Rest and Spread Operators**: `...` used for gathering/rest parameters or spreading elements.

// 7. **Classes**: Introduced a more natural way to define classes and inheritance.

// 8. **Modules**: Native support for modules using `import` and `export`.

// 9. **Promises**: Built-in support for promises, making asynchronous code more manageable.

// 10. **Symbol**: A new primitive data type for creating unique identifiers.

// 11. **Iterators and Generators**: Introduce ways to traverse data structures like arrays.

// 12. **Map and Set Data Structures**: Built-in collections for handling unique keys and values.

// 13. **Enhanced Object Literals**: Additional features in object literals, like shorthand for defining methods and dynamic property names.

// 14. **Typed Arrays**: Arrays with specified data types for handling binary data more efficiently.

// 15. **New Methods for Strings and Arrays**: `startsWith()`, `endsWith()`, `includes()` for strings and `find()`, `findIndex()`, `forEach()` for arrays.

// 16. **Object.assign()**: Merges objects by copying the values of all enumerable own properties from one or more source objects to a target object.

// These are just some of the prominent features introduced in ES6. Subsequent versions of ECMAScript have continued to bring additional improvements and new functionalities to JavaScript.