// let string = 'Hello world!'
//
// // string.toLowerCase()
// // string.toUpperCase()
// //
// // string.toUpperCase()!==name.toLowerCase() - проверяет, является ли элемент буквой
// //
// // string.includes('M', 5) - проверяет, есть ли символ М(или набор символов), начиная с индекса 5 (возвращает boolean)
// //
// // string.startsWith('M')
// // string.endsWith('a') - проверяет первый и последний символы
// //
// // string.indexOf('y') - возвращает индекс, где впервые встречается элемент (если символа нет - возвращает -1)
// // string.lastIndexOf('y', 5) - возвращает индекс, где последний раз встречается элемент (если символа нет - возвращает -1)
// //
// // string.trim('Mi') - вырезает все, кроме 'Mi'
// //
// // string.slice(1, 5) - вырезает, начиная с индекса 1 до индекса 5(не входит)
// //
// // string.split('') - разбирает строку на буквы и возвращает массив символов
//
// // console.log('A'>'a') - сравнивает ASCII коды (65 > 97) - false
//
// // /[a-zA-z]/.test(string[i]) - проверяет, является ли символ буквой
//
// console.log(string.includes('Hello'))
// console.log(string.includes('hello'))
//


// Напишите программу, которая будет проверять переменную string.
// Программа должна проверить строку по условию:
// 1. Если номер телефона начинается на 7, тогда программа также должна проверить, указан ли в номере дефис
// Если это так, программма должна вывести в консоль "Номер телефона сформирован верно"
// 2. Если номер начинается на 7, но дефис отсутствует - вывести "Отсутствует дефис"
// 3. Если номер не начинается на 7, тогда вывести сообщение "Номер не соответствует формату"

// let string = '7-987-493423'
// if (string[0] === '7') {
//     if (string.includes('-')) {
//         console.log('Номер телефона сформирован верно')
//     } else console.log('Отсутствует дефис')
// } else console.log('Номер не соответствует формату')
//
// string.replace(substr1, substr2) - метод заменяет одна подстроку на другую
// string.replaceAll(substr1, substr2) - метод заменяет одна подстроку на другую

// console.log(string.slice(0, 6))

// let string = 'Привет мой друг'
// console.log(string.slice(-4))

//написать функцию clearDataStr, котторая обезличит почлученный аругмент в виде номера карты,
// сформировав новую строку  в консольпо паттерну (**** 4567 8833 ****)
let card = '4321 4567 8833 0000'

function clearDataStr(str) {
    // console.log(str.replace(str.slice(0, 4), '****').replace(str.slice(-7), '** ****'))
    console.log(`**** ${str.slice(5, 12)}** ****`)
}

clearDataStr(card)