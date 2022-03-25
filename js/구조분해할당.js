const user = {
    // key: value
    name: 'Terry',
    age: 35,
    email: 'ebc861@gmail.com',
    adress: 'USA'
}

const { name: id, age, email, adress = 'Korea' } = user

console.log(`사용자의 이름은 ${id} 입니다.`)
console.log(`사용자의 나이는 ${age} 입니다.`)
console.log(`사용자의 주소는 ${email} 입니다.`)
console.log(adress)

const fruits = ['Apple', 'Banana', 'Cherry']
const [, ,c] = fruits

console.log(c)