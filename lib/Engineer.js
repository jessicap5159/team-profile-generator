const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); // check on this 
        this.github = github;
    }


getGitHub() {
    return this.github;
}

getRole() {
    return 'Engineer';
}


}

module.exports = Engineer;
