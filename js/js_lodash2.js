import _ from 'lodash' // from `node_modules`

const users = [
    { userId: '1', name: 'terry' },
    { userId: '2', name: 'eve' },
    { userId: '3', name: 'winter' },
    { userId: '4', name: 'solar' },
    { userId: '5', name: 'mckenzy' }    
]

const foundUser = _.find(users, {userId: '1'})
const foundUserIndex = _.findIndex(users, {userId: '1'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, {name: 'solar'})
console.log(users)