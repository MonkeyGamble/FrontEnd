// // Задача 1
// // Напишите функцию checkValue(num), которая получает в качестве аргумента число
// // и вернет сообщение в лог по условию
// // Если число будет больше 10, в консоли выведите сообщение "Число больше 10",
// // В противно случае "Число меньше или равно 10"
// import {log} from "console";
//
// function checkValue(num) {
//     // if (num > 10) console.log(`Число ${num} больше 10`)
//     // else console.log(`Число ${num} меньше или равно 10`)
//     let result = (num > 10) ? `Число ${num} больше 10` : `Число ${num} меньше или равно 10`
//     console.log(result)
// }
//
// function repeatLog(count) {
//     for (i = 1; i <= count; i++) {
//         console.log(`Сообщение ${i}`)
// //     }
// // }
// //
// // repeatLog(3)
// //
// // function getDouble(num) {
// //     return num ** 2;
// // }
// //
// // let answer = getDouble(3)
// // let answer2 = getDouble(10)
//
// // Напишите функцию even(2), которая будет возвращать строку с ответом на вопрос.
// // Делится ли указанный аргумент на 2 без остатка
//
// // function even(arg) {
// //     // if (arg % 2 === 0) return 'Число делится на 2'
// //     // else return 'Число не делится на 2 без остатка'
// //
// //     return (arg % 2 === 0) ? 'Число делится на 2' : 'Число не делится на 2 без остатка'
// //
// //
// // }
// //
// // let result = even(10)
// // console.log(result)
// // let result1 = even(11)
// // console.log(result1)
//
// // Напишите функцию coverString(string), которая будет получать строку в качестве аргумент
// // Функция должна вернуть бинарное значение (0 или 1) по условию
// // Если длина строки будет больше 10 символов - тогда функция должна вернуть 1
// // В противном случае - 0
// // function coverString(str) {
// //     return (str.length > 10) ? 1 : 0
// // }
// //
// // let result = coverString('Hello')
// // console.log(result)
//
//
// // Напшиите функцию sum(num), которая будет возвращать сумму чисел от 1 до num включительно
// // function sum(num) {
// //     let result = 0;
// //     for (let i = 1; i <= num; i++) {
// //         result += i
// //     }
// //     return result
// // }
// //
// // console.log(sum(5))
//
// function countWords(str) {
//     let count = 0
//
//     for (let i = 0; i < str.length; i++) {
//         //if(!str.includes(' ')) return 1
//         if (str[i] == ' ')
//             count++
//
//     }
//     return count + 1
//
// }
//
// let result = countWords('Hello')
// let result2 = countWords('Hello agagin privet')
//
// console.log(result)
// console.log(result2)
//
//
// // let str = 'Hello my friend'
// // console.log(str.split(''))
//
// function countWord(str) {
//     return str.split(' ').length
// }


//num1 - начальная ставка
//num2 - годовой процент
//num3 - срок вклада в годах
import {log} from "console";

function getCalc(start, percent, year) {
    let result = start;
    for (i = 1; i <= year; i++) {
        result += result * (percent / 100)
    }
    return result
}

// let twoYears = getCalc(100, 10, 2)
// let threeYears = getCalc(2000, 10, 3)
// console.log(twoYears)
// console.log(threeYears)
console.log(getCalc(1000, 5, 99))