const Employee = require('./Employee');

class Engineer extends Employee {
    // special here is the Guthub username
    constructor(name, id, email, special) {
        super(name, id, email);

        this.special = special;
    
    }

    getSpecial() {
        return `https://github.com/${this.special}/`
    }

    getRole() {
        return `Engineer`
    }
}

module.exports = Engineer;