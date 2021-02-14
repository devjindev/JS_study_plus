// 1. async

// promise
// function fetchUser(){
//     return new Promise((resolve, rejcet) => { // promise 생성자 생성
//         resolve('ellie');
//     });
// }

// async
async function fetchUser(){
    return 'ellie'; // 생성자 생성 필요 X
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function getApple(){
    await delay(1000); // 1초
    return '🍎';
}

async function getBanana(){
    await delay(1000); // 2초
    return '🍌';
}

// promise
// function pickFruits(){
//     return getApple().then((apple) => {
//         return getBanana().then((banana) => {
//                 `${apple} + ${banana}`
//         });
//     });
// }

// await
async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. Promise APIs

function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]) // 배열 모두 출력
        .then((fruits) => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]); // 배열 중 가장 먼저 실행되는거 출력
}
pickOnlyOne().then(console.log);