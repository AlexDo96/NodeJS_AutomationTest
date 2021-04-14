let Employee = require("./Employee")

class TrialEmployee extends Employee { //Inherit parent Employee object
    constructor(name,id) {
        super(name,id); //Call & using contrusctor of parent Employee object
    }

    getExtraSalary(){ 
        return 0; //Trial Employee will not receive extra salary => return 0
    }
}
module.exports = TrialEmployee;