// 1. Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
//    [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

// 2. Create a method that takes as input a name, city, and state to welcome a person.
// Note that name will be an array consisting of one or more values that should be joined together with one space between each,
// and the length of the name array in test cases will vary.
//     Example:
//     ['John', 'Smith'], 'Phoenix', 'Arizona'
//     This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello(name, city, state) {
    const fullName = name.join(' ')
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

// 3. Determine the total number of digits in the integer (n>=0) given as input to the function.
// For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
// All inputs will be valid.

function digits(n) {
    const numStr = n.toString()
    return numStr.length
}

// 4. Wilson primes satisfy the following condition. Let P represent a prime number.
//     Then,
//     ((P-1)! + 1) / (P * P)
// should give a whole number.
// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
    if (p < 2) return false
    let factorial = 1
    for (let i = 2; i <= (p - 1); i++) {
        factorial *= i;
    }
    return (factorial + 1) % (p * p) === 0;
}

// 5. Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    if (str.length % 2 != 0) str += '_'
    let array = []
    for (let i = 0; i < str.length; i += 2) {
        array.push(str.slice(i, i + 2))
    }
    return array
}

// 6. Modify the kebabize function so that it converts a camel case string into a kebab case.
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes: the returned string should only contain lowercase letters

function kebabize(str) {
    if (str === str.toLowerCase()) return str;
    let kebab = '';
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            if (str[i] === str[i].toUpperCase()) {
                if (i !== 0) {
                    kebab += '-';
                }
                kebab += str[i].toLowerCase();
            } else kebab += str[i].toLowerCase();
        }
        if (/[0-9]/.test(kebab[kebab.length - 1])) {
            kebab = kebab.slice(0, -1);  //если последний символ - цифра, удаляем ее (!!!!!!!!!!!!!!!!!!почему-то не работает)
        }

    }
    return kebab;
}

// 7. While surfing in web I found interesting math problem called "Always perfect".
// That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square.
// For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25,
// since the result number is a perfect square the square root of 25 would be 5.
// So now lets write a function which takes numbers separated by commas in string format and returns the number
// which is a perfect square and the square root of that number.
// If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".
// If string contains 4 numbers but not consecutive it returns "not consecutive".

function checkRoot(string) {
    let perfectSquareTmp = parseInt(string[0])
    let perfectRoot
    let numberArray = string.split(',').map(Number)
    if (numberArray.length !== 4) {
        return 'incorrect input'
    } else {
        for (let i = 0; i < numberArray.length - 1; i++) {
            if (parseInt(numberArray[i]) + 1 !== parseInt(numberArray[i + 1])) {
                return 'not consecutive'
            }
        }
        for (let i = 1; i < numberArray.length; i++) {
            perfectSquareTmp *= parseInt(numberArray[i])
        }
    }
    let perfectSquare = perfectSquareTmp + 1
    perfectRoot = Math.sqrt(perfectSquare)

    return {perfectSquare, perfectRoot}
}

// 8. Given an array of 4 integers [a,b,c,d] representing two points (a, b) and (c, d),
// return a string representation of the slope of the line joining these two points.
// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.
// a:x1
// b:y1
// c:x2
// d:y2
// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope


function getSlope(array) {
    if (array[1] - array[0] === 0) return 'undefined'
    let slope = (array[3] - array[2]) / (array[1] - array[0])
    return slope.toString()
}


//9. You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
//
// Example(Input1, Input2 --> Output):
//
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function (l, w) {
    return (l === w) ? l * w : 2 * l + 2 * w
};

//10. Your friend advised you to see a new performance in the most popular theater in the city.
// He knows a lot about art and his advice is usually good, but not this time:
// the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple,
// especially since the exit is located right behind your row to the left.
// All you need to do is climb over your seat and make your way to the exit.
// The main problem is your shyness: you're afraid that you'll end up blocking the view
// (even if only for a couple of seconds) of all the people who sit behind you and in your
// column or the columns to your left. To gain some courage, you decide to calculate the number
// of such people and see if you can possibly make it to the exit without disturbing too many people.
// Given the total number of rows and columns in the theater (nRows and nCols, respectively),
// and the row and column you're sitting in, return the number of people who sit strictly
// behind you and in your column or to the left, assuming all seats are occupied.

function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - (col - 1)) * (nRows - row)
}

//11.The first century spans from the year 1 up to and including the year 100, the second century
// - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.

function century(year) {
    return (year % 100 === 0) ? year / 100 : Math.floor(year / 100) + 1
}

//12. Bob needs a fast way to calculate the volume of a cuboid with three values:
// the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}

//13. Return the Nth Even Number

function nthEven(n) {
    if (n === 0) return 'undefined'
    return 2 * (n - 1)
}

//14.An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game,
// subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.
// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game)
// and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth.
// Return 0 if 0.An NBA game runs 48 minutes (Four 12 minute quarters).
// Players do not typically play the full game, subbing in and out as necessary.
// Your job is to extrapolate a player's points per game if they played the full 48 minutes.
// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game)
// and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

function pointsPer48(ppg, mpg) {
    if (ppg === 0 || mpg === 0) return 0
    let points = (ppg / mpg) * 48
    return Math.round(points * 10) / 10
}

//15.Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n) {
    let binaryN = '';
    if (n === 0) return '0'
    for (let i = 0; n > 0; i++) {
        binaryN = (n % 2) + binaryN
        n = Math.floor(n / 2)
    }
    return Number(binaryN)
}

