// function handle(c) {
//     let a = c * 2
//     console.log('handle')
//     return function (m) {
//         console.log(a, m)
//         console.log('closure')
//     }
// }
//
// let b = handle(5)
// let c = handle(10)
//
// b(1)
// b(2)
//
// c(3)
// c(4)
//
// handle(5)(20)

//--------------------------------------------
//
// function generateUrl(zone) {
//     return function (domen) {
//         console.log(`${domen}.${zone}`)
//     }
// }
//
// let comUrl = generateUrl('com')
// let netUrl = generateUrl('net')
//
// comUrl('amazon')
// comUrl('google')
// netUrl('speedtest')
// netUrl('ebay')

// Напиши функцию pow(n), которая в качестве аргумента будет принимать значение степени.
// Функция должна вернуть другую функцию, которая в качестве аргумента будет принимать число num и выводить в коноль
// результат вычисления степени (num ** 2)
function pow(n) {
    return function (num) {
        console.log(num ** n)
    }
}

let double = pow(2)
let quad = pow(4)
double(5)
quad(2)