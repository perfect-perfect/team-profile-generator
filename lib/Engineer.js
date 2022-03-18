const Employee = require('./Employee');

class Engineer extends Employee {
    // special here is the Github username
    constructor(name, id, email, special) {
        super(name, id, email);

        this.special = special;
    
    }

    getSpecial() {
        return `<a href="https://github.com/${this.special}/">GitHub Profile</a>`
    }

    getRole() {
        return `Engineer`
    }
}

module.exports = Engineer;