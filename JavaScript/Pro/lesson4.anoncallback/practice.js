// // Напишите функцию getSqrt(num), которая возвращает значение корня аргумента.
// // Примечание:
// // 1) Попробуйте не использовать в решение объект Math
// // 2) Напишите решение используя все 3 вида функции
//
// // function getSqrt(num) {
// //     return num**0.5
// // }
//
// // let getSqrt = (num) => num ** 0.5
// //
// // // let getSqrt = function (num) {
// // //     return**0.5
// // // }
// //
// // console.log(getSqrt(9))
// //
// // //альт
// // for (let i = 1; i < num; i++) {
// //     if (num / i == i) return i;
// // }
//
// // Напишите функцию checkEven(n), которая будет возвращать булевыф тип с ответом на вопрос - явлеяется ли аргумент четным числовым значением
// // Примечание: реализвать используя все 3 вида функций
// // function checkEven(num) {
// //     return num % 2 === 0
// // }
// //
// // let checkEven = function (num) {
// //     return num % 2 === 0
// // }
// //
// // // let checkEven = (num) => (num % 2 === 0) ? 'Число четное' : 'Число нечетное'
// // let checkEven = (num) => num % 2 === 0
//
//
// //Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.
// //
// // A Pythagorean Triple consists of arranging 3 integers, such that:
// //
// // a2 + b2 = c2
// //
// // Examples
// // [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
// //
// // [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
// //
// // [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132
// //
// // [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2
// //
// // Return Values
// // For Python: return True or False
// // For JavaScript: return true or false
// // Other languages: return 1 or 0 or refer to Sample Tests.
//
// function isPythagoreanTriple(int) {
//     return int[0] ** 2 + int[1] ** 2 === int[2] ** 2
// }
//
// console.log(isPythagoreanTriple([5, 3, 4]))
// console.log(isPythagoreanTriple([3, 4, 5]))
// console.log(isPythagoreanTriple([13, 12, 5]))
// console.log(isPythagoreanTriple([100, 3, 999]))
// console.log(isPythagoreanTriple([25500, 24480, 7140]))
//
//
// //An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// //
// // Example: (Input --> Output)
// //
// // "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// function isIsogram(str) {
//     if (str === '') return true
//
//     const lowerStr = str.toLowerCase()
//
//     for (let i = 0; i < lowerStr.length; i++) {
//         for (let j = i + 1; j < lowerStr.length; j++) {
//             if (lowerStr[i] === lowerStr[j]) return false
//         }
//     }
//     return true;
// }
//
// console.log(isIsogram("Dermatoglyphics")); // Вывод: true
// console.log(isIsogram("aba")); // Вывод: false
// console.log(isIsogram("moOse")); // Вывод: false
//
// //Julie is x years older than her brother, and she is also y times as old as him.
// //
// // Given x and y calculate Julie's age using the function age(x, y).
// function age(x, y) {
//     const bro = x / (y - 1)
//     return bro + x
// }
//
// console.log(age(6, 3))
// console.log(age(-15, 0.25))

// Напишите функцию stringSqrt(callback), окторая получает в каечстве аргумента колбек
// и проверяет результат кольбека (математичсекого выражения) на четность.
// функция должна вывести сообщения в косноль


function stringSqrt(callback) {
    // if (callback() % 2 === 0) console.log(`Результат ${callback()} - четный`)
    // else console.log(`Результат ${callback()} - нечетный`)
    console.log((callback() % 2 === 0) ? `Результат ${callback()} - четный` : `Результат ${callback()} - нечетный`)
}

stringSqrt(() => 5 + 10)
stringSqrt(() => 2 * 2)
stringSqrt(() => 3 / 2)