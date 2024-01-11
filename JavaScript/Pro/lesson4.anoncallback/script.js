//function expression
//анонимная(безымянная) функция - часть какого-то выражения
let double = function (num) {
    return num ** 2
}

//function declaration
function double(num) {
    return num ** 2
}

//Стрелочная функция
//1-й режим работы - без return
let doubleArrow = (num) => num ** 2

//2-й режим работы
//если стрелочная функция наблюдает фигурные скобки в теле функции - мы обязаны указать ключевое слово return
let doubleArrow2 = (num) => {
    return num ** 2
}