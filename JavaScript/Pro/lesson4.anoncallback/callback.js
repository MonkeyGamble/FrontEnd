//callback - функция, которая указывается как аргумент внутри другой функции

// function handle(callback) {
//     return callback() * 2
// }
//
// handle(() => 5 + 5)  //передаем в функцию handle другую функцию в качестве аргумента
//
// console.log(handle(() => 5 + 5))
//
// function calc2(a, b, sign) {
//     if (sign === '+') {
//         return a + b
//     } else if (sign === '-') {
//         return a - b
//     } else if (sign === '*') {
//         return a * b
//     } else if (sign === '/') {
//         return a / b
//     } else if (sign === '%') {
//         return a % b
//     } else if (sign === '**') {
//         return a ** b
//     } else if (sign === 'sqrt') {
//         return a ** 0.5
//     }
// }
//
// console.log(calc2(5, 5, '*'))
// console.log(calc2(5, 5, '-'))
// console.log(calc2(5, 5, '+'))
// console.log(calc2(5, 5, '/'))
// console.log(calc2(5, 5, '%'))
//
// function calc(callback) {
//     return callback()
// }
//
// // calc(() => 10 / 5 ** 2 + (234 - 40))
// console.log(calc(() => 10 / 5 ** 2 + (234 - 40)))

//Напишите функцию, которая должна проверить, существует ли аргумент как элемент массива

// let array = [1, 2, 3, 4, 5, 6]


// function checkElem(sigh, value) {
//     for (let elem of array) {
//         if (sigh === '==') {
//             if (elem == value) return true
//         } else if (sigh === '!=') {
//             if (elem != value) return true
//         }else if (sigh === '>=') {
//             if (elem >= value) return true
//         }else if (sigh === '>=') {
//             if (elem >= value) return true
//         }
//     return false
// }
//
// function checkElem(callback) {
//     for (let elem of array) {
//         if (callback(elem)) return true
//     }
//     return false
// }
//
// checkElem((elem) => elem > 10)
// checkElem((elem) => elem > 10 && elem % 2 === 0)
//
// console.log(checkElem((elem) => elem > 10 && elem % 2 === 0))

// console.log(checkElem('==', 10))
// console.log(checkElem('==', 5))
// console.log(checkElem('!=', 0))
// checkElem('<', 10) // true
// checkElem('==', 10) // false
// checkElem('!=', 0) // true
