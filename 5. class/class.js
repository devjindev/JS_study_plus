'use strict';

// 1. Class

// 클래스
class Person{
    // 생성자
    constructor(name, age){
        // 필드
        this.name = name;
        this.age = age;
    }
    // 메소드
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20); // 객체 생성
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setter => 원치 않는 값 입력되면 에러 출력

// 클래스
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; // set을 호출
    }

    get age(){ // 받아와서
        return this._age; // 반환
    }

    set age(value){ // 세팅
        if(value < 0){ // value < 0 이면
            throw Error('age can not be negative'); // 에러 출력
        }
        this._age = value;
    }
}

const user1 = new User('Steve', 'Job', 1); // 객체 생성
console.log(user1.age);

// 3. Fields // Too soon!

// 4. Static // Too soon!

// 5. 상속 (extends)
//재사용, 유지보수 용이

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

// Shape class 상속 받음
class Rectangle extends Shape{}
class Triangle extends Shape{
    // 메소드 재정의
    // 다양성 => 오버라이딩
    draw(){
        super.draw();
        console.log('🔺');
    }
    getArea(){
        return (this.width * this.height) /2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. instanceOf