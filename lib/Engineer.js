class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role); // check on this 
        this.github = github;
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

getGithub() {
    return this.github;
}
}

module.exports = Engineer;