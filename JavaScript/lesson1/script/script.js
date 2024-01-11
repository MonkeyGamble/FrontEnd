console.log('Hello world')

let variableName = 'First variable'

console.log(variableName)

let num1 = 5

console.log(num1)

const pi = 3.14
// pi = 5
console.log(pi)

let variable = 3
variable = 'Text'

//Типы данных

//number

let number1 = 23
let number2 = 23.4

//Базовые математические дейстивя

console.log(5 + 3)
console.log(5 - 3)
console.log(6 / 4)
console.log(4 ** 2) //возведение в степень
console.log(11 % 2) //остаток от деления

//Infinity
//-Infinity
//NaN - Not a Number

console.log(3 / 0) //Infinity
console.log(-3 / 0) //-Infinity
console.log('not number' / 2) //NaN
console.log(NaN + 1) //NaN
console.log(NaN ** 0) //1

//string

let first_name = 'John'
let last_name = 'Smith'
let age = 15

//конкатенация
console.log(first_name + ' ' + last_name)
let full = first_name + ' ' + last_name
console.log(full)

console.log('John' + ' ' + 'Smith')

//Hello. I'm firstname lastname.

console.log("Hello. I'm " + first_name + ' ' + last_name)

console.log(
	'Hi. My name is ' + first_name + ' ' + last_name + ". I'm " + age + ' age.'
)

//Интерполяция - в обратных кавычках
console.log(`Hi. My name is ${first_name} ${last_name}. I'm ${age}.`)

let r = 12
let g = 34
let b = 14

console.log(`"rgb(${r}, ${g}, ${b})"`)

//boolean

let result = true //boolean
let result1 = 'true' //string

//Object

//Ввод данных

// let firstname = prompt('Enter your name:', 'Name'); //Name - имя по умолчанию
// let lastname = prompt('Enter your surname:', 'Jackson');
// console.log(firstname + ' ' + lastname);

// let num3 = prompt('enter the number');
// console.log(num3);
// console.log(typeof num3);
// console.log(typeof 34);
// console.log(typeof false); //typeof возвращает тип переменной

//преобразование из строки в число и обратно

let variable2 = '24' //string

console.log(typeof variable2)

let number4 = Number(variable2)
let number5 = Number('123')

console.log(typeof number4)
console.log(typeof number5)

let variable3 = 12 //number
let str1 = String(variable3)
console.log(typeof str1)

console.log(2 + 2) //4
console.log(2 + '2') //string '22' - конкатенация
console.log(typeof ('2' + 2))
console.log('2' - 1) // компилятор преобразовывает результат в число
console.log('2' * 3) // компилятор преобразовывает результат в число
console.log('2' / 2) // компилятор преобразовывает результат в число

console.log('fg' / 2) //NaN
console.log(Number('fa')) //NaN

// let num10 = Number(prompt('enter the number'))
// console.log(num10 ** 2)

// let num11 = Number(prompt('enter the 1st number'))
// let num12 = Number(prompt('enter the 2nd number'))
// console.log(`Sum = ` + (num11 + num12))

//Условные операторы

// if(условие) {
//   действие 1}
// else if (условие2) {
//   действие 2
// } else { }

// if (true) {
// 	console.log('Hello!')
// }

// let num = Number(prompt('Enter the number'))

// if (num > 0) {
// 	console.log('More than 0')
// } else if (num == 0) {
// 	console.log('Equal to 0')
// } else {
// 	console.log('Less than 0')
// }

let str12 = '24'
let num12 = 24

if (str12 === num12) {
	console.log('True')
} else {
	console.log('False')
}
// == проверяет только значения элементов (не проверяет тип элемента)
// === проверяет и тип и значения элементов

//операторы сравнения
// > < >= <= == === !=

// let num20 = prompt('enter the number')
// if (num20 === 0) {
// 	console.log('=0')
// }

// let num20 = Number(prompt('enter the number:'))
// if (num20 > 0) {
// 	console.log(num20 * 2)
// }

if ('X' > 'A') {
	console.log('yes')
} else {
	console.log('no')
}

if ('AB' > 'AF') {
	//сначала сравниваются первые буквы, потом вторые. Старшинство по порядку в алфавите
	console.log('yes')
} else {
	console.log('no')
}
