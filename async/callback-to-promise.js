// 3. ⭐ 콜백 지옥

class UserStorage{
    loginUser(id, password){ // 로그인 메서드
        return new Promise((resolve, reject) => { // 프로미스 생성자 생성
            setTimeout(function(){
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'corder' && password === 'academy')
                ){
                    resolve(id); // 로그인 성공
                }else{
                    reject(new Error('not found')); // 로그인 실패
                }
            }, 2000);
        });
    }
    getRoles(user){ // 로그인 한 사용자 정보 메서드
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(user === 'ellie'){
                    resolve({name: 'ellie', role: 'admin'}); // 정보 제공 성공
                }else{
                    reject(new Error('no access')); // 정보 제공 실패
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage(); // 객체 생성
const id = prompt('enter your id'); // id 입력
const password = prompt('enter your password'); // password 입력

// Promise
userStorage
    .loginUser(id, password)
    .then((user) => userStorage.getRoles(user)) // 성공하면
    .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`)) // 성공하면
    .catch(console.log); // 실패하면

// Callback
// userStorage.loginUser( // 로그인 메서드
//     id, 
//     password, 
//     function(user){ // 로그인 성공 하면
//         userStorage.getRoles( // 로그인 한 사용자 정보 메서드 불러옴
//             user,
//             function(userWithRole){ // 정보 제공 성공
//                 alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             function(error){ // 정보 제공 실패
//                 console.log(error);
//             }
//         );
//     },
//     function(error){// 로그인 실패
//         console.log(error);
//     }
// );