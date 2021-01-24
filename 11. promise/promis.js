'use strict';

// 1. Producer
const promise = new Promise((resolve, reject) => {
    console.log('doing something ...');
    setTimeout(()=>{
        resolve('하읭');
        //reject(new Error(''));
    }, 2000);
});

// 2. Consumer : then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    })

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

// 4. Error Handing

// 5. Callback Hell example