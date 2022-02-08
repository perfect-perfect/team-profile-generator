const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(username) {
        super(username);

        this.username = username;
    }

    getGithub() {
        return `https://github.com/${this.username}/`
    }

    getRole() {
        return `Engineer`
    }
}

module.exports = Engineer;