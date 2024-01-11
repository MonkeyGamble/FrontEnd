function foo() {
    console.log('78')
}

// функция возращает undefined, т.к. нет return

const result = foo()
console.log(result)

let a = console.log()
console.log(a)

//Приведение типов

let b = '4'

console.log(Number(b))
console.log(+b)
console.log(b - 0)

//toString

let u = 5
console.log(String(u))
console.log(u + '')
console.log(u.toString())

//toBoolean

let c = 8

console.log(Boolean(c))
console.log(c > 6)
console.log(!c)

//0
// undefined
// ''
// Nan
// null
// false

if (function a() {
} == 'function a(){}') console.log('true!!!')
else console.log('false!!!')

// if (function a() {
// } === 'function a(){}') console.log('true!!!')
// else console.log('false!!!')