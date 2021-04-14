//Define arr = [value1, value2, ...]
let myArray = [1, "Teo", 2, "Ti"]
console.log(myArray[0]) //Index begin 0

myArray.push("Tun")  //Add value to array using push()
console.log(myArray[4]) //Return "Tun"

myArray[4] = 4 //Set array value at defined position
console.log(myArray)
console.log(myArray[4]) //Return 4

myArray.pop() //Remove last value of array
console.log(myArray)

myArray.splice(2,2) //Remove array values from which position and how many values remove 
console.log(myArray)






