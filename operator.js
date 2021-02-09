// 1. String concatenation
console.log('my'+' cat');
console.log('1'+2);
console.log('String literals');

// 2. Numeric operators

// 3. Increment and decrement operators
let counter=2; // 2
const preIncrement=++counter; // 3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement=counter++; // 4
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement=--counter; // 3
console.log(`preDecrement: ${preIncrement}, counter: ${counter}`);
const postDecrement=counter--; // 2
console.log(`preDecrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators

// 5. Comparison operators

// 6. Logical operators
const value1 = true;
const value2 = 4 < 2; // false

console.log(`or: ${value1 || value2 || check()}`);
console.log(`and: ${value1 && value2 && check()}`);
console.log(!value1);

function check(){
    for(let i = 0; i < 10; i++){
        console.log('💦');
    }
    return true;
}

// 7. Equality
// == loose equality
// === strict equality

// 8. Conditional operators : if

// 9. Ternary operators

// 10. Switch

// loops
// 11. while loops
// 12. for loops
// 13. break, continue

// Q1
for(let i = 0; i < 11; i++){
    if(i % 2 == 1){
        continue;
    }
    console.log(i);
}

// Q2
for(let i = 0; i < 11; i++){
    if(i == 8){
        break;
    }
    console.log(i);
}