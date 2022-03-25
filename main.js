// class Vehicle {
//     constructor(name, wheel) {
//         this.name = name
//         this.wheel = wheel
//     }
// }

// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//     constructor(name, wheel) {        
//         super(name, wheel)
//     }
// }
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicycle = new Bicycle('세발', 3)
// console.log(myBicycle)
// console.log(daughtersBicycle)


// class Car extends Vehicle {
//     constructor(name, wheel, license) {
//         super(name, wheel)
//         this.license = license
//     }
// }

// const myCar = new Car('벤츠', 4, true)
// const daughtersCar = new Car('포르쉐', 4, false)
// console.log(myCar)
// console.log(daughtersCar)

//.filter()  원본 데이터는 훼손 x

const numbers = [1,2,3,4]
const furits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number => number < 3)

// console.log(a)

// const b = numbers.filter(idx => idx <3)

// console.log(b)
// console.log(numbers)

//.find() .findIndex()

// const a = furits.find(furit => /^C/.test(furit))
// console.log(a)

// const b = furits.findIndex(furit => /^C/.test(furit))
// console.log(b)

// .includes()

// const a = numbers.includes(3)
// console.log(a)

// const b = furits.includes('HEROPY')
// console.log(b)

// push() unshift() 원본이 수정됨 주의

// numbers.push(5) // 배열의 맨 뒤에 추가
// console.log(numbers)

// numbers.unshift(0) // 배열의 맨 앞에 추가
// console.log(numbers)

// numbers.reverse()
// furits.reverse()

// console.log(numbers)
// console.log(furits)

// numbers.splice(2, 1, '999') // param1 = index 번호 param2 지울 숫자갯수 param3 = 대체할 것
// console.log(numbers)

// furits.splice(1, 0, 'Orange')
// console.log(furits)

