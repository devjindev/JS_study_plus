'use strict';

// 1. Variable

// let
let globalName='global name';
{
    let name='YJ';
    console.log(name);
    name='Hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting
{
    age=4;
    var age;
}
console.log(age);

// const
const daysInWeek=7;
const maxNumber=5;

// 2. Variable types

// number
const infinity=1/0;
const negativeInfinity=-1/0;
const nAn='not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string

// boolean

// null

// undefined

// symbol

// object
const me={name: 'YJ', age: 23};
me.age = 24;
console.log(me);

// 3. Dynamic typing
let text='hello';
console.log(text.charAt(0)); // string
console.log(`value: ${text}, type: ${typeof test}`); // string
text=1;
console.log(`value: ${text}, type: ${typeof test}`); // number
text='7'+5;
console.log(`value: ${text}, type: ${typeof test}`); // string
text='8'/'2';
console.log(`value: ${text}, type: ${typeof test}`); // number
console.log(text.charAt(0)); // error