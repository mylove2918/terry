import _ from 'lodash' // from `node_modules`

const usersA = [
    { userId: '1', name: 'terry' },
    { userId: '2', name: 'river'}
]

const usersB = [
    { userId: '1', name: 'terry' },
    { userId: '3', name: 'Neo'}
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)