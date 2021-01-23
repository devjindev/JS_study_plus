'use strict';

// 1. Class declarations
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(this.name + ': hello!');
    }
}

const me = new Person('YJ',23);
console.log(me.name);
console.log(me.age);
me.speak();

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        if(value<0){
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

const user1 = new User('Steve', 'job', 1);
console.log(user1.age);

// 3. Fields (public, private)

// 4. static

// 5. Inheritance(상속)
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Trinangle extends Shape{
    draw(){
        console.log('다시다시');
    }
    getArea(){
        super.draw();
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Trinangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf