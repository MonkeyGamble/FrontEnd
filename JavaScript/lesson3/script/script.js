// // // let users = [
// // // 	['John', 'Smith', 23],
// // // 	['Lily', 'Hardy', 45],
// // // 	['Bob', 'Brown', 16],
// // // ]

// // // console.log(users[1])

// // // console.log(users[1][1]) //выводим элемент с индексом 1 из массива с индексом 1

// // // console.log(users[2][2])

// // // let product = [
// // // 	['iphone X', 900, ['blue', 256, 48]],
// // // 	['iphone XR', 800, ['black', 128, 48]],
// // // ]

// // // console.log(product[1][2][0])

// // // for (let i = 0; i < users.length; i++) {
// // // 	for (let j = 0; j < users[i].length; j++) {
// // // 		console.log(users[i][j])
// // // 	}
// // // }

// // // //0,1,2
// // // for (let i = 0; i <= 5; i++) {
// // // 	console.log(i)
// // // 	if (i == 2) {
// // // 		break
// // // 	}
// // // }

// // // //0,1
// // // for (let i = 0; i <= 5; i++) {
// // // 	if (i == 2) {
// // // 		break
// // // 	}
// // // 	console.log(i)
// // // }

// // // //0,1,3,4,5
// // // for (let i = 0; i <= 5; i++) {
// // // 	if (i == 2) {
// // // 		continue
// // // 	}
// // // 	console.log(i)
// // // }

// // // let num = 5

// // // // >0 %3==0

// // // if (num > 0 && num % 3 == 0 && num % 5 == 0) {
// // // 	console.log('true')
// // // } else {
// // // 	console.log('false')
// // // }

// // // let num = 15

// // // if (num > 0 || num % 3 == 0 || num % 5 == 0) {
// // // 	console.log('true')
// // // }

// // // for (let i = 100; i < 1000; i += 5) {
// // // 	if (i % 3 == 0) {
// // // 		console.log(i)
// // // 	}
// // // }

// // //Object

// // //phone
// // //model: samsung A51
// // //color: white
// // // price: 1000$
// // //RAM: 8Gb
// // //camera: 48Mpx

// // // let object = {} //empty object

// // let user = {
// // 	firstname: 'John', //свойства обьекта: ключ(только String): значение
// // 	lastname: 'Smith',
// // 	age: 18,
// // 	'is Admin': true,
// // }
// // console.log(user)
// // console.log(user.firstname)
// // console.log(user['lastname'])

// // user.age = 19
// // console.log(user)

// // user.gender = 'Male' //добавляем новое свойство
// // console.log(user)

// // delete user.lastname
// // console.log(user)

// // console.log(user['is Admin'])

// // user['is Admin'] = false

// // user['likes cars'] = true

// // console.log(user)

// // const product = {
// // 	model: 'iphone 13 pro max',
// // 	price: '1200$',
// // }

// // product.price = '$1250'

// // product.color = 'purple'

// // console.log(product)

// // let country = {
// // 	name: 'Germany',
// // 	language: 'german',
// // 	capital: {
// // 		name: 'Berlin',
// // 		population: '3000000',
// // 		date: {
// // 			year: 1237,
// // 		},
// // 	},
// // }

// // console.log(country)
// // console.log(country.language)
// // console.log(country.capital.year)
// // console.log(country['capital']['year'])

// // console.log('language' in country)
// // console.log('year' in country)
// // console.log('year' in country.capital.date)

// // let users = {
// // 	firstName: ['John', 'Laura', 'Anna'],
// // 	lastName: ['Smith', 'Hardy', 'Marley'],
// // }

// // console.log(users.firstName[1])

// // let user = {}

// // user.name = 'John'
// // user.surname = 'Smith'

// // console.log(user)

// // user.name = 'Pete'

// // console.log(user)

// // delete user.name

// // console.log(user)

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// }

// let sum = salaries.John + salaries.Ann + salaries.Pete
// console.log(sum)

// //У нас есть следующий объект:

// let user = {
// 	name: 'John',
// 	age: 30,
// }

// Проверьте, что в объекте есть ключ age.

// console.log('age' in user)

let list = [-23, 3, 2, 0, 1, -4, 2, -5]
let sum = 0
for (let i = 0; i < list.length; i++) {
	if (list[i] > 0) {
		sum += list[i]
	}
}
console.log(sum)
