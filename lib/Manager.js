const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); // check on this 
        this.officeNumber = officeNumber;
    }


getOfficeNumber() {
    return this.officeNumber;
}

getRole() {
    return 'Manager';
}


}

module.exports = Manager;
