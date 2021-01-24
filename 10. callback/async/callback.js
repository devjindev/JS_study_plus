'use strict';

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('2');
console.log('3');

// Synchronous callback (즉각 처리)
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

// ASynchronous callback (나중 처리)
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async Callback'), 2000);

// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => console.log() , 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => console.log(), 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert('드루와');
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log('error');
    }
);