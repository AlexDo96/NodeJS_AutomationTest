class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getExtraSalary() {
        return 500;
    }

    getEmployeeInfo() {
        console.log("Employee name: ", this.name);
        console.log("Employee id: ", this.id);
    }
}

module.exports = Employee;