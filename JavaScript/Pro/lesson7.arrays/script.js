let array = [1, 2, 3, 4, 5]
let array2 = new Array(1, 2, 3, 4, 5)

// [ 1, 2, 3, 4, 5, <5 empty items>, 78 ]
// array[10] = 78
// console.log(array.length)   //11
//
// console.log(array)
// console.log(array2)
//
// console.log(array[100])  //undefined

for (let elem of array) {
    console.log(elem)
}