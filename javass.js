// find max
let array = [1, 2, 1000, 3, -1]
let max = 0
for (let i= 0; i < array.length-1; i++){
    if (max<array[i]){max=array[i]}
}
console.log(max)

// find factorial
let factorial = 1
for (let i=5; i> 0; i--){
    factorial *= i
}
console.log(factorial)

// sum of numbers
let numbers = [2, 3, 4, 34, 56]
let summation = 0
for (let i = 0; i < numbers.length; i++){
    summation += numbers[i]
}
console.log(summation)

// vowel in a string
let vowel = ["a", "e", "i", "o", "u"]
let count = 0
function countVowels(word){
    let words = word.toLowerCase()
    for (i=0; i < words.length; i++){
        if (vowel.includes (words[i]) ){
            count++
        }
    }
}
countVowels("Unique")
console.log(`The number of vowels in the word is ${count}`)

// prime numbers
function isPrime(a){
    if (a > 1 && a / a ==1 && a % 2!== 0){
        console.log(`${a} is a prime number`)
    }else console.log(`${a} is not a prime number`)
}
isPrime(17)
isPrime(6)
isPrime(10)
isPrime(111)

let arrayOfNumbers = [1, 2, 3, 4, 5, 6]
for (let i=0; i < arrayOfNumbers.length; i++){
    if (arrayOfNumbers[i]%3 == 0){
        console.log(`The multiples of 3 in the array is ${arrayOfNumbers[i]}`)
    }
}

// finding index of anumber
let anArray = [3,5,6,45,78,9]
function indexOfNumber(number){
    index = anArray.indexOf(number)
}
indexOfNumber(78)
console.log(`The index of 78 is ${index}`)

// merging and sorting
let firstArray = [0, 4, 6]
let secondArray = [1, 2, 3]
let theArray = firstArray.concat(secondArray)
console.log("ASC: "+ theArray.sort())