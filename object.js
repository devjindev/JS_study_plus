'use strict';

// 1. Objects
// ⭐ object = {key : value};

// * 객체 생성 방법
const obj1 = {}; // 'object literal' 문법 
const obj2 = new Object(); // 'object constructor' 문법

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {
    name: 'ellie',
    age: 4
};
print(ellie);

// 가능은 함..ㅎ
ellie.hasJob = true; // 객체 속성 추가
console.log(ellie.hasJob);

delete ellie.hasJob; // 객체 속성 삭제
console.log(ellie.hasJob);

// 2. Computed properties
// 정확하게 어떤 키가 필요한지 모를 때 (동적(실시간)으로 결정될 때)

console.log(ellie.name);
console.log(ellie['name']);

ellie['hasJob'] = true; // 객체 속성 추가
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');

// 3. Property value shorthand
// 함수 사용

const person1 = {name: 'a', age: 2};
//const person2 = makePerson('b', 3);
const person2 = new Person('b', 3);
console.log(person1);
console.log(person2);
/*
function makePerson(name, age){
    return{
        name: name,
        age: age
    };
}
*/

// 4. Constructor Function

function Person(name, age){
    this.name = name;
    this.age = age;
}

// 5. in operator  : 객체 안에 key 있는지 확인

// 6. for..in vs for..of
// for (key in obj)
// for (value of interable)

// 7. Cloning

const user = { name: 'ellie', age: '20'};
const user2 = user; // user2에 user를 clone
user2.name = 'coder'; // clone
console.log(user);

const user4 = {}; // 빈 객체 생성
Object.assign(user4, user); // user4에 user를 clone
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = {}; // 빈 객체 생성
Object.assign(mixed, fruit1, fruit2);// 1 fruit1에 fruit2를 clone // 2 mixed에 fruit1을 clone
console.log(mixed.color);
console.log(mixed.size);