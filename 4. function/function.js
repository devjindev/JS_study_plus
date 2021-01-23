'use strict';

// 1. Function declaration
// one function === one thing
function pringHello(){
    console.log('Hello');
}
pringHello();

function log(message){
    console.log(message);
}
log('Hello');
log(1234);
log(1+2);

// 2. Parameters
function changeName(obj){
    obj.name = 'corder';
}
const me = {name: 'YJ'};
changeName(me);
console.log(me);

// 3. Default parameters

// 4. Rest parameters 'arguments'

// 5. local scope

// 6. Return a value

// 7. Early return, early exit

// 1. function expression
const print = function (){
    console.log('print');
};
print();
const printAgain = print;
printAgain();

// 2. Callback
// anoymous function
// named function
// Arrow function (한 줄 함수)
// IIFE

// quiz
function calculate(command,a,b){
    switch(command){
        case 'add':
            console.log(a+b);
            break;
        case 'substract':
            console.log(a-b);
            break;
        case 'divide':
            console.log(a/b);
            break;
        case 'multiply':
            console.log(a*b);
            break;
        case 'remainder':
            console.log(a/b);
            break;
        default :
            console.log('잘못 입력하셨습니다.');
    }
}