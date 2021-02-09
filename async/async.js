// 1. async
async function fetchUser(){
    return '하읭';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

// 3. useful Promise APIs