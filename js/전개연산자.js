// 전개연산자(Spread)

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
console.log(...fruits)

// function toObject(a,b,c) {
//     return {
//         // a: a,
//         // b: b,
//         // c: c
//         // 키 밸류가 같으면 하나만 남긴다
//         a,b,c
//     }
// }

// 위 함수를 화살표로

const toObject = (a,b,...c) => ({a,b,c})

console.log(toObject(...fruits))

