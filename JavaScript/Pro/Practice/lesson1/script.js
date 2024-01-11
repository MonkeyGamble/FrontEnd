let array = [4, 5, 1, 2, 0, 9, 56];

function maxElement(array) {
    let max = array[0];
    for (i = 1; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
}

function minElement(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}

maxElement(array);
minElement(array);


let array1 = [1, 2, 3, 4, 5];
// let x = array1.pop();
// console.log(x);

let newArray = array1.slice(0, 3,);
console.log(newArray)
console.log(array1)
let newArray1 = array1.splice(0, 3, 20);
console.log(newArray1)
console.log(array1)