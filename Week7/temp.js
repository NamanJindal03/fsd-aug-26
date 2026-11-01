// const a = 'I am good';
// const b = 'Are you good?';

// console.log(a);
// console.log(b);


//data types -> ???
// integer (number) | string (characters) | boolean 

// c++ java 
// int a = 100 -> 

/* 
    this variable a -> can only hold -> integer (number values )
    char impCharacter = 'n';

    statically typed languages -> 
*/
/* 
    Dynamically typed language -> it is data type agnostic -> 
*/


// let a = 100;
// a = 'abcde';
/* 
    If this would have been any other langauge -> it would give an error -> because we changed the 
    datatype from number to string 
*/

/* no errors */
// redeclaration -> very wrong 
var randomVariable2 = 'naman';
var randomVariable2 = 100; 

//1000-2000 -> 


let str1 = 'naman'
let str2 = "naman"
let str3 = `naman`; //template literals
let str4 = 'naman1234'
let str5 = '78256' //string

//let str4 = 'naman" //not alloed

let combinedStr = str1 + str2; //concatenation -> combine
console.log(combinedStr)

let diffStr = str1 - str2;
console.log(diffStr)

let diffStr2 = str1 * str2;
console.log(diffStr2)

//NaN -> not a number


let number1 = 120.5;
let number2 = 240.2;
const number3 = number1+ number2;
const number4 = number1- number2;
const number5 = number1 * number2;
const number6 = number1 / number2;
console.log(number3)
console.log(number4)
console.log(number5)
console.log(number6)

const number7 = 3;
const number8 = 11;
const remainder = number8 % number7;
console.log(remainder) 

if(number7 == 3){
    console.log('i hit a bullseye')
}
else{
    console.log('i missed the shot')
}

//changing value -> 
    //logged in -> isUserLoggedIn = true;
    //logout -> isUserLoggedIn = false;

//DOB -> const -> 


function checkIfEven(n){
    if(n % 2 == 0){
        console.log('Even')
    }
    else{
        console.log('odd')
    }
}

checkIfEven(89);

checkIfEven(12);

checkIfEven(45);

let name = 'naman'
let age = 20;

const greeting = 'Hi! ' + name + ' how are you doing today? You mentioned your age as ' + age + ".correct?";
//the aboe was a acombination of strings + variables 
console.log(greeting)


//a better way to write the above using template literals
const greetingBetter = `hi! ${name} how are you doing today? You mentioned your age as ${age}. Correct? `
console.log(greetingBetter)

let currentQueueCount = 100;
currentQueueCount--;
console.log(currentQueueCount);// reduced by 1
currentQueueCount++;
currentQueueCount++;
console.log(currentQueueCount);


let cometsSeen = 100;
let newCommetsArrived = 15;
cometsSeen += newCommetsArrived; // cometsSeen = cometsSeen + newCommetsArrived; *= , -=, /=
console.log(cometsSeen);



let number100 = 100;
let someStringNumber = '100';

if(number100 == someStringNumber){
    console.log('they are same')
}
else{
    console.log('dealing with different value');
}
//== can sometimes autoamtically convert your datatype if they are diffent 

if(number100 === someStringNumber){
    console.log('they are same')
}
else{
    console.log('dealing with different value');
}
// === also compares the datatype 

if(100 > 200){
    console.log('first')
}
else{
    console.log('soemthing else')
}
/* 
    <= 
    <
    >=
    >
*/

//default functions already present in the language -> pre defined function -> pre defined code -> 
let a = 100;
console.log(a)
console.log(a.toString())

let b = '7867';
console.log(parseInt(b));

Number();
String();//

console.log("50" + 10)



const newName = 'abcd' + 'def' + 10; //true
//abcddef10 -> falsy?????
if(newName){
    console.log('true')
}
else{
    console.log('false')
}



const someExpression = (0 - 100) - 'random-value';

// -100 - 'random-value' => NaN
if(someExpression){
    console.log('true')
}
else{
    console.log('false')
}
//false


//Write a code in TS, which tells whether a person is eligible to vote in india or not
// there is a special condition, that people with the age greater than 90 are also not allowed to vote

// if(!loggedIn){
//     if(isAdmin){

//     }
//     else{

//     }
// }

// if(condition1 && condition2){

// }

// const arr  = [];