const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, special) {
        super(name, id, email);

        this.special = special;

        this.role = `Intern`;

        
    }

    getSchool() {
        return this.special
    }

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;