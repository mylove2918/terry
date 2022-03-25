const userAge = {
    // key: value
    name: 'Terry',
    age: 35
}

const userEmail = {
    name: 'Terry',
    email: 'ebc861@gmail.com'
}

const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)

const a = {k:123}
const b = {k:123}

console.log(a === b)

const user = {
    name: 'Terry',
    age: 35,
    email: 'ebc861@gmail.com'
}

const keys = Object.keys(user)
console.log('keys', keys)
console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)

