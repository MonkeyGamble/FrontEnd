// // //0
// // // undefined
// // // ''
// // // Nan
// // // null
// // // false
// //
// // // || возвращает либо первый true, либо последний false
// //
// // console.log(1 || false || true || {} || 654654)    //как только находит первый true? компилить перестает
// //
// // console.log(" " || 0 || (7 || null))  //вернет пробел
// //
// // console.log([] + null + 1)   //null1
// //
// // console.log(false || 0 || (7 || null))   //вернет 7
// //
// // console.log('foo' + +'bar')  //fooNaN
// //
// // console.log(false || +"0" || 7)  //7
// //
// // console.log(+'0')  //0
// //
// // console.log(!!'false' == !!'true')   //true
// //
// // if (5 || 0 || 6) {
// //     console.log('this is true')
// // } else 'this is false'
// //
// // if (null || 0 || 6) {
// //     console.log('this is true')
// // } else 'this is false'
// //
// //
// // // && возвращает первое false или последнее true
// // console.log(4 && 5)  //5
// //
// // if (null && 0 && 6) {
// //     console.log('this is true')
// // } else console.log('this is false')
// //
// // let userData = {
// //     email: '',
// //     password: 'sgsdfghsdh'
// // }
// // if (userData.email && userData.password) {
// //     console.log('login')
// // } else console.log('this user does not exist')
// //
// //
// // console.log(!!false)
// // console.log(!!true)
// // console.log(!!'hello')
// // console.log(!!'false' == !!'true')  //true
// // console.log(!!false == !!true)      //false
// //
// //
// // // ++a a++ --a a--
// //
// // let a = 1
// // let b = a++
// // console.log(a++)
// // console.log(a)
// // console.log(b)
// //
// // let c = 1
// // let d = --c
// //
// // console.log(c)
// // console.log(d)
// //
// // console.log(5 && false || null && 0)  //(5 && false) || (null && 0) //возвращает последний false - null
// // //
// //
// // function solution(str) {
// //     let strArr = str.split('')
// //     strArr.reverse()
// //     str = strArr.join('')
// //     return str
// // }
// //
// // console.log(solution('Hello'))
//
// // function disemvowel(str) {
// //     let strArr = str.split('');
// //     let newStrArr = [];
// //     for (let elem of strArr) {
// //         if (elem === 'a' || elem === 'e' || elem === 'i' || elem === 'o' || elem === 'u') {
// //         } else {
// //             newStrArr.push(elem);
// //         }
// //     }
// //     return newStrArr.join('');
// // }
// //
// // console.log(disemvowel("This website is for losers LOL!"))
// // function findSmallestInt(args) {
// //     let min = args[0];
// //
// //     for (let i = 1; i < args.length; i++) {
// //         if (min > args[i]) {
// //             min = args[i];
// //         }
// //     }
// //
// //     return min;
// // }
// //
// // console.log(findSmallestInt([78, 56, 232, 12, 8]))
// // console.log(findSmallestInt([78, 56, 232, 12, 18]))
//
//
// function check(a, x) {
//     return a.includes(x)
// }
//
// const bmi = (weight, height, bmi = w / h ** 2) =>
//     bmi <= 18.5 ? "Underweight" :
//         bmi <= 25 ? "Normal" :
//             bmi <= 30 ? "Overweight" : "Obese";
//
//
// let arr = ['1:1', '2:2']
// console.log(arr[0][1])
// console.log(arr[1][3])
//
// function points(games) {
//     let arrX = []
//     let arrY = []
//     let total = 0
//     for (let i = 0; i < games.length; i++) {
//         if (parseInt(games[i][0]) > parseInt(games[i][2])) {
//             total += 3
//         } else if (parseInt(games[i][0]) === parseInt(games[i][2])) {
//             total += 1
//         }
//     }
//     return total
// }
//
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))
//
// function getGrade(s1, s2, s3) {
//     let s = (s1 + s2 + s3) / 3
//     return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
//
// }
//
// console.log(getGrade(95, 90, 93))
//
//
// function sumArray(array) {
//     let sum = 0;
//     let sortedArray = array.slice().sort((a, b) => a - b);
//     // Измененное условие цикла для включения всех элементов
//     for (let i = 1; i < sortedArray.length - 1; i++) {
//         sum += sortedArray[i];
//     }
//
//     return sum;
// }
//
//
// function sumArray(array) {
//
//     if (array && Array.isArray(array) && array.length > 0) {
//
//         let sum = 0;
//         let sortedArray = array.slice().sort((a, b) => a - b);
//
//         for (let i = 1; i < sortedArray.length - 1; i++) {
//             sum += sortedArray[i];
//         }
//
//         return sum
//     } else {
//         return 0
//     }
// }
//
// console.log(sumArray([3, 5]))
//
//
// let s = 'heron'
// console.log(s[0])
// console.log(s[s.length - 1])
//
//
// function feast(beast, dish) {
//     return (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1])
// }
//
// console.log(false > true)


function removeEveryOther(arr) {
    let result = []
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i])
    }
    return result
}

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(removeEveryOther([1, 2]))
// console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))