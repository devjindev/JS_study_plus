'use strict';

// state : pending -> fulfilled or rejected
// Producer(생성자) VS Consumer(소비자)
// network, read file

// 1. Producer
// 주의) 새로운 프로미스가 만들어질 때, 함수 자동적으로 바로 실행
const promise = new Promise(function(resolve, reject){
    console.log('doing something...');
    setTimeout(function(){
        //resolve('ellie'); // 성공
        reject(new Error('no network')); // 실패
    }, 2000);
});

// 2. Consumers : then, catch, finally
promise
    // then
    .then(function(value){ // 프로미스 성공하면 실행
        console.log(value);
    })
    // catch
    .catch(function(error){ // 프로미스 실패하면 실행
        console.log(error);
    })
    // finally
    .finally(function(){ // 프로미스 성공, 실패 상관없이 마지막으로 실행됨
        console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise(function(resolve, reject){ // promise 생성
    setTimeout(function(){
        resolve(1); // 성공 // 1
    }, 1000); // 1초
});

fetchNumber
    .then((num) => num * 2) // 성공 // 2
    .then((num) => num * 3) // 성공 // 6
    .then(function(num){ // 성공하면
        return new Promise(function(resolve, reject){ // promise 생성
            setTimeout(function(){
                resolve(num-1); // 성공 // 5
            }, 1000); // 2초
        })
    })
    .then(function(num){
        console.log(num); // 총 : 5 // 3초
    });

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => { // promise 생성자 생성
        setTimeout(() => {
            resolve('🐔'); // 성공
        }, 1000); // 1초
    });
const getEgg = (hen) => 
    new Promise((resolve, reject) => { // promise 생성자 생성
        setTimeout(() => {
            //resolve(`${hen} => 🥚`); // 성공
            reject(new Error(`error! ${hen} => 🥚`)); // 실패
        }, 1000); // 2초
    });
const cook = (egg) => 
    new Promise((resolve, reject) => { // promise 생성자 생성
        setTimeout(() => {
            resolve(`${egg} => 🍳`); // 성공
        }, 1000); // 3초
    });

getHen()
    .then((hen) => getEgg(hen)) // 성공하면 // getHen()에서 받아온 value를 getEgg() hen에 전달
    // .catch((error) => { // 실패하면
    //     return '🧀';
    // })
    .then((egg) => cook(egg)) // 성공하면
    .then((meal) => console.log(meal)) // 성공하면
    .catch((meal) => console.log(meal)); // 실패하면