'use strict';

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
//console.log(json);

json = JSON.stringify(['apple', 'banana']);
//console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate : new Date(),
    symbol : Symbol('id'), // 변환 X
    jump: function(){ // 변환 X
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
//console.log(json);

json = JSON.stringify(rabbit, ['name']); // name만 변환
//console.log(json);

// json = JSON.stringify(rabbit, function(key, value){ // callback
//     console.log(`key: ${key}, value: ${value}`);
//     return key === 'name' ? 'ellie' : value;
// });
// console.log(json);

// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit); // obj -> JSON
console.log(json);

const obj = JSON.parse(json, function(key, value){ // JSON -> obj // callback
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

rabbit.jump(); // obj // O
//obj.jump(); // JSON -> obj // X error

console.log(rabbit.birthDate.getDate()); // obj // O
console.log(obj.birthDate.getDate()); // JSON -> obj // X error => 이미 date가 문자형으로 바껴서