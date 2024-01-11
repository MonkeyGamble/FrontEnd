// //number
// let num = 165;
// // string
//
// //boolean
//
// //null
//
// //undefined
//
// //object
// let userData = {
//     name: 'Alice',
//     age: 45,
// }
// userData.isAdmin = true
// userData.friends = ['bob', 'mike', 'greg'];
// delete userData.age
// // console.log(userData)
//
//
// let userData2 = userData
//
// userData.age = 25
//
// console.log(userData)
// console.log(userData2)
// // let name = null;
// // console.log(typeof null)
// // console.log(typeof name)
// // console.log(typeof undefined)

let arr = [78, 56, 99, 12, 44, 54]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

let arr = [78, -56, 99, -12, 44, -54]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) console.log(arr[i]);
}