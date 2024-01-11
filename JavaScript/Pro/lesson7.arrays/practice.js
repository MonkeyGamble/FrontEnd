// let array = [1, 'two', 4, true, 56, false, 'one', 'TV']
//
// for (let elem of array) {
//     if (typeof elem === 'string') console.log(elem)
// }

// let numbers = [10, 7, 8, 5, 34, 22, 65, 11, 101]
// let evenNumbers = []
//
// for (let elem of numbers) {
//     if (elem % 2 === 0) evenNumbers.push(elem)
// }
// console.log(evenNumbers)
//
// console.log(numbers.includes(10))

let array = [1, 3, false, false, 10]
let result = []
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'boolean') {
//         result = array.slice(array.indexOf(array[i]))
//         break
//     }
// }

// for (let elem of array) {
//     if (typeof elem === 'boolean') {
//         result = array.slice(array.indexOf(elem))
//         break
//     }
// }
// let findTrue = array.indexOf(true)
// let findFalse = array.indexOf(false)
// let startIndex = (findTrue === -1 || findFalse === -1) ? Math.max(findTrue, findFalse) : Math.min(findTrue, findFalse)
// result = array.slice((startIndex === -1) ? 0 : startIndex)
// console.log(startIndex)
// console.log(result)

//// Task 2
// // Задан массив, который хранит занчения разныъ типов данных
//
// let array = [1,'string', true, 10, 'test', false]
// let result = []
// // Напишите программу, которая сформирует новый массив с элементами, с момента
// // нахождения первого булевого типа и далее до конца массива.


// let startIndex = array.findIndex(elem => typeof elem === 'boolean')
// console.log(array.slice((startIndex === -1) ? 0 : startIndex))


// Task 3
// Создайте новый массив clear_phone, который будет содежрать все номера телефонов с небольшим условием:
// Каждый номер телефона должен быть приведен к международному формату +790325435425
// let phones = [
//     '890325435425',
//     '853425435436',
//     '823425435476',
//     '896325435474',
//     '892325435445',
//     '893325435446',
// ]
// let clear_phone = []
// // for (let i = 0; i < phones.length; i++) {
// //     clear_phone.push('+7' + phones[i].slice(1))
// // }
//
// for (let elem of phones) {
//     clear_phone.push(`+7${elem.slice(1)}`)
// }
//
// // for (let elem of phones) {
// //     let clear_string = `+7${elem.slice(1)}`
// //     clear_phone.push(clear_string)
// // }
// console.log(phones)
// console.log(clear_phone)


// Task 4

// Сформируйте 2 новых массива phones, emails, которые должны содержать отдельно почту и номер телефона

// let phones = []
// let emails = []
//
// let contacts = [
//     'test@gmail.com.net 853433456',
//     'string@mail.ru 85342345',
//     'someemail@mail.com 853469356',
//     'tigran@yahoo.net 85342546736',
// ]
// [
//     'test@gmail.com.net',
//     'string@mail.ru',
//     'someemail@mail.com',
//     'tigran@yahoo.net',
// ]
// [
//     '853433456',
//     '85342345',
//     '853469356',
//     '85342546736',
// ]
// for (let elem of contacts) {
//     let indexSpace = elem.indexOf(' ')
//     emails.push(elem.slice(0, indexSpace))
//     phones.push(elem.slice(indexSpace + 1))
// }
//
// console.log(phones)
// console.log(emails)