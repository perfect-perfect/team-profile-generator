const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, special) {
        super(name, id, email);

        this.special = special;

        this.role = `Engineer`
    
    }

    getGithub() {
        return `https://github.com/${this.special}/`
    }

    getRole() {
        return `Engineer`
    }
}

module.exports = Engineer;