'use strict';

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['🍏', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

// 3. looping over an array
console.clear();
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 4. Addtion, deletion, copy
// push: 뒤에서부터 add
fruits.push('🍑','🍒');
console.log(fruits);
// pop : 뒤에서부터 remove
fruits.pop();
fruits.pop();
console.log(fruits);
// unshift : 앞에서부터 add
fruits.unshift('🍑','🍒');
console.log(fruits);
// shift : 앞에서부터 remove
fruits.shift();
fruits.shift();
console.log(fruits);
// splice : index부터 n개까지 remove
fruits.push('🍕','🍔','🍟');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'🍳','🧇');
console.log(fruits);

// combine tow arrays
const fruits2 = ['🥛','🥃'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
console.clear();
console.log(fruits);
// indexOf
console.log(fruits.indexOf('🍟'));
// includes
console.log(fruits.includes('🍔'));
// lastIndexof
fruits.push('🍟');
console.log(fruits);
console.log(fruits.indexOf('🍟'));
console.log(fruits.lastIndexOf('🍟'));