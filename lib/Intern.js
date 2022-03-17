const Employee = require('./Employee');

class Intern extends Employee {
    // what's special here is school
    constructor(name, id, email, special) {
        super(name, id, email);

        this.special = special;
   
    }

    getSpecial() {
        return this.special
    }

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;