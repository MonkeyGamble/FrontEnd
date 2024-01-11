// function sayHello(name) {
//     console.log('-_'.repeat(10))
//     console.log(`Hello, ${name}!`)
//     console.log('-_'.repeat(10))
// }

//
// sayHello('Vasya');
// sayHello('Steven');
// sayHello('Neena');

//если в функции отсутствует return - результат выполнения всегда undefined
// function handle() {
//     let a = 10 + 50
//     return a
// }
//
// let result = handle() + 10
// console.log(result)

// function handle(num) {
//     for (let i = 0; i <= 10; i++) {
//         if (num === i) {
//             continue
//         }
//         console.log(i)
//     }
// }

//handle(5)

function handle2(num) {
    for (let i = 0; i <= 10; i++) {
        if (num === i) {
            return   //останавливает выполнение функции
            break    //останавливает выполнение цикла
            continue //пропускает этот элемент

        }
        console.log(i)
    }
    console.log('End!')
}

handle2(5)

let array = [2, 4, 6, 9, 9, 10]

function checkElem(num) {
    for (let elem of array) {
        if (elem === num) {
            console.log('Элемент найден')
            return elem
        }
    }
    console.log('Элемент не найден')
}

console.log(checkElem(7))
console.log(checkElem(4))