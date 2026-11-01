"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 100;
console.log(a); //100
a = 'abcde';
console.log(a); //'abcde'
const name = 'naman';
//it tries to automatically also understand the types -> 
// let newVariable; //by default -> undefined value and its datatype also undefined
// console.log(newVariable)
// newVariable = 10;
// newVariable = 'str';
//let and const 
let number1 = 100;
number1 = 300;
//reassinging the value | updating the value 
const number2 = 200;
// number2 = 500; 
//in a const once we have initialised a value we cannot update or change or anything like that
// const number4; //ypu cannot do this
/*
    when we are assigning let or const to a variable that is called as
        'declaration of variable'

    when we are putting the value for the first time that is called as
        'initialisation'

    when we are updating the value
        'update'
*/
let isHealthy = null;
isHealthy = true;
isHealthy = false;
isHealthy = null;
let randomValue = 'naman'; //typescript is smart -> 
//randomValue -> string 
// randomValue = 200; //number -> wrong -> 
//this is something you should never ever ever be using -> 
let anything = 10; //you are writing JS and you are pretneding to write TS
anything = 'an';
anything = true;
anything = undefined;
anything = null;
//
let number3; //in let a variable can be initialised with blank value 
// number3 = 200;
number3 = 'abcd';
function checkIfEven(n) {
    if (n % 2 == 0) {
        console.log('Even');
        return true;
        // return 10
    }
    else {
        console.log('odd');
        return false;
        // return 100
    }
}
let n = 90;
const isEven = checkIfEven(n); //false
if (isEven) {
    n = n * 2;
}
console.log(n); //180
// checkIfEven(12);
// checkIfEven(45);
// checkIfEven('naman') //runtime -> error
//Write a function which return the sum of 2 numbers -> 
// write a perfect typescript code 
function giveSum(n1, n2) {
    return n1 + n2;
}
const sum = giveSum(10, 20);
console.log(sum);
//# sourceMappingURL=first-ts-code.js.map