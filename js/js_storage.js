const user = {
    name: 'terry',
    age: 35,
    emails: [
        'ebc861@hanmail.net',
        'dnflwlq86@naver.com'
    ]
}

// localStorage.setItem('user', JSON.stringify(user))
// const userInfo = localStorage.getItem('user');
// console.log('JSON userInfo',userInfo)
// console.log('js userInfo', JSON.parse(localStorage.getItem('user')))
// const jsInfo = JSON.parse(localStorage.getItem('user'))
// console.log('typeof', typeof jsInfo)
// localStorage.removeItem('user')
// const removeUser = localStorage.getItem('user')
// console.log('remove data', removeUser) 
localStorage.setItem('user', JSON.stringify(user))
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
localStorage.setItem('user', JSON.stringify(obj))
console.log(localStorage.getItem('user')) 

