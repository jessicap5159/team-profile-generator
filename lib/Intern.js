class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role); // check on this 
        this.school = school;
    }


getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

getRole() {
    return this.role; // ask about this one
}

getSchool() {
    return this.school;
}


}

module.exports = Intern;