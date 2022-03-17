const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, special) {
        super(name, id, email);

        this.special= special;
    }
    // ??? i think  i can get rid of this
    getSpecial() {
        return this.special;
    }

    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;