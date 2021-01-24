// 1. objcet to JSON (stringfy)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

// 2. JSON to object (parse)
const obj = JSON.parse(json);
console.log(obj);