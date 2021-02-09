'use strict';

// 1. 동기와 비동기

console.log('1'); // 1
setTimeout(function(){ // 비동기 // callback 함수 // 4
    console.log(2);
}, 1000);
console.log('3'); // 2

// 2. callback

// Synchronous callback

function printImmediately(print){
    print(); // callback 함수
}
printImmediately(function(){ // 3
    console.log('hello');
});

// Asynchronous callback

function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(function(){ // 비동기 // callback 함수 // 5
    console.log('async callback')
}, 2000);

// 3. ⭐ 콜백 지옥

class UserStorage{
    loginUser(id, password, onSuccess, onError){ // 로그인 메서드
        setTimeout(function(){
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'corder' && password === 'academy')
            ){
                onSuccess(id); // 로그인 성공
            }else{
                onError(new Error('not found')); // 로그인 실패
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){ // 로그인 한 사용자 정보 메서드
        setTimeout(function(){
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'}); // 정보 제공 성공
            }else{
                onError(new Error('no access')); // 정보 제공 실패
            }
        }, 1000);
    }
}

const userStorage = new UserStorage(); // 객체 생성
const id = prompt('enter your id'); // id 입력
const password = prompt('enter your password'); // password 입력
userStorage.loginUser( // 로그인 메서드
    id, 
    password, 
    function(user){ // 로그인 성공 하면
        userStorage.getRoles( // 로그인 한 사용자 정보 메서드 불러옴
            user,
            function(userWithRole){ // 정보 제공 성공
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            function(error){ // 정보 제공 실패
                console.log(error);
            }
        );
    },
    function(error){// 로그인 실패
        console.log(error);
    }
);