//Give a collection of integer
//Divide in to even and odd number arrays
//Print results

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumber = []
let oddNumber = []

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 == 0) {
        evenNumber.push(myArray[i])
    } else {
        oddNumber.push(myArray[i])
    }
}

console.log("Even numbers: ", evenNumber)
console.log("Odd numbers: ", oddNumber)

