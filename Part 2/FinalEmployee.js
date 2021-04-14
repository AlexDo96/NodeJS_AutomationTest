let Employee = require("./Employee")

class FinalEmployee extends Employee { //Inherit parent Employee object
    constructor(name,id) {
        super(name,id); //Call & using contrusctor of parent Employee object
    }

    signContract(){
        console.log(this.name + " Please to HR to sign employee contract")
    }
}
module.exports = FinalEmployee;