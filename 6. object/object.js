// 1. Literals and properties
const obj1 = {};
const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const me = {name: 'YJ', age: 23}; // 객체 생성
print(me);

me.hasJob = true;
console.log(me.hasJob);

delete me.hasJob;
console.log(me.hasJob);

// 2. computed properties
console.log(me.name);
console.log(me['name']);
me['hasJob'] = true;
console.log(me.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(me, 'name');
printValue(me, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('YJ', 23);
console.log(person4);

// 4. Constructor function
function Person(name, age){
    this.name = name;
    this.age = age;
}

// 5. in operator
console.log('name' in me);
console.log('age' in me);
console.log('random' in me);
console.log(me.random);

// 6. for..in vs for..of
console.clear();
// in
for(key in me){
    console.log(key);
}
// of
const array = [1, 2, 4, 5];
for(value of array){
    console.log(value);
}

// 7. cloning
const user = {name: 'YJ', age: '23'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// 객체 복사하기
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);