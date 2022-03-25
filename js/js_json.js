import myData from '../json/myData.json'

console.log(myData)

const user = {
    name: 'terry',
    age: 35,
    emails: [
        'ebc861@gmail.com',
        'dnflwlq86@naver.com'
    ]
}

console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)
console.log('typeof obj',typeof obj)