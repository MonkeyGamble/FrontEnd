// Array

// let array = [] //empty array

// let fruits = ['Apple', 'Banana', 'Orange']

// console.log(fruits)

// console.log(fruits[1])

// console.log(fruits.length) //длина массива

// console.log(fruits[fruits.length - 1])

// fruits.push('Mango', 'Avocado') //добавление элементов в конец массива
// console.log(fruits)

// fruits.unshift('Blackberry', 'Strawberry') //добавляем элемент в начало массива
// console.log(fruits)

// fruits.pop() //удаление последнего элемента массива
// console.log(fruits)

// fruits.shift() //удаление первого элемента
// console.log(fruits)

// // fruits.splice(start, deletecount, elem1, elem2,...)

// fruits.splice(1, 1, 'Grape') //удаляем 1 элемент с индексом 1 и добавляем новый элемент на место удаленного
// console.log(fruits)

// fruits.splice(2, 0, 'Kiwi') //добавляем в массив новый элемент с индексом 2
// console.log(fruits)

// fruits.splice(1, 3) //начиная с индекса 1 удаляем 3 элемента
// console.log(fruits)

// fruits.splice(1, 0, 'Cherry', 'Appricot', 'Peach')
// console.log(fruits)

// console.log(fruits.indexOf('Appricot')) //узнаем индекс элемента Appricot

// fruits.splice(fruits.indexOf('Appricot'), 1) //удаляем элемент Appricot, не зная его индекса
// console.log(fruits)

// fruits[2] = 'SuperPeach'
// console.log(fruits)

// let styles = ['Jazz', 'Blues']
// console.log(styles)
// styles.push("Rock'n'Roll")
// console.log(styles)
// styles.splice(1, 1, 'Classic')
// console.log(styles)
// styles.shift()
// console.log(styles)
// styles.splice(0, 0, 'Rap', 'Raggy')
// console.log(styles)

//Циклы

//Инкремент и декремент

// i = i + 1
// i++
// ++i
// i+=1

// i--
// --i

// let i = 5
// console.log(i++) //в выводе 5
// console.log(i) //i = 6

// console.log(++i) //в выводе 7

// for(Начало; Условие; Шаг){
//     тело цикла;
// }

// for (let num = 0; num <= 5; num++) {
// 	console.log(num)
// }

// let arr1 = []
// let var1 = Number(prompt('enter 1st variable'))
// let var2 = Number(prompt('enter 2nd variable'))
// let var3 = Number(prompt('enter 3rd variable'))
// arr1.push(var1, var2, var3)
// // arr1.splice(0, 0, var1, var2, var3)
// console.log(arr1)

// let arr2 = []
// for (let i = 0; i < 3; i++) {
// 	arr2.push(Number(prompt('enter the number')))
// }
// console.log(arr2)

// let numbers = [1, -34, 0, 23.3, 3, 3, -2, 5, 12, 0, 4, -31]

// for (let i = 0; i <= numbers.length - 1; i++) {
// 	if (numbers[i] >= 0) {
// 		console.log(numbers[i])
// 	}
// }

// let sum = 0
// for (let i = 0; i <= numbers.length - 1; i++) {
// 	sum += numbers[i]
// }
// console.log(sum)

let numbers = [25, 15, 0, 25, 3, 3, -2, 5, 12, 0, 4, -31]

for (let i = 0; i <= numbers.length - 1; i++) {
	if (numbers[i] >= 10 && numbers[i] % 5 === 0 && numbers[i] < 100) {
		console.log(numbers[i])
	}
}

for (let i = 10; i < 100; i += 5) {
	console.log(i)
}

for (let i = 10; i > 0; i--) {
	console.log(i)
}
