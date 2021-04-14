let TrialEmployee = require("./TrialEmployee.js")
let FinalEmployee = require("./FinalEmployee.js")

let teo = new FinalEmployee("Teo", 123)
let ti = new TrialEmployee("Ti", 456)

teo.getEmployeeInfo()
console.log("Teo salary: ", teo.getExtraSalary())
teo.signContract()

ti.getEmployeeInfo()
console.log("Ti salary: ", ti.getExtraSalary())



