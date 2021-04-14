let myName = "Teo"

let length = myName.length

console.log("Length of myName : ", length)

let hello = "Hello ! My name is "

//----------Combine string--------
let final = hello + myName

console.log(final)

let final2 = hello.concat(myName)

console.log(final2)

//-----------Trim------------------
let myFullName = "    Do Hoang Tuan Anh    "

console.log(myFullName.trim())

//----------Separate string--------
let fullString = "Crocodile"
let array = fullString.split("")

console.log(array)

let array1 = fullString.split("d")

console.log(array1)

//----------Index Of string--------
let longString = "Hello World !"
let indexOf = longString.indexOf("A")  //Find "A" in longString

console.log(indexOf) //Not found return -1

let indexOf1 = longString.indexOf("r")  //Find "R" in longString

console.log(indexOf1) 





