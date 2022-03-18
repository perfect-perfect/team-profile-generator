const Employee = require('./Employee');
// special here is office number
class Manager extends Employee {
    constructor(name, id, email, special) {
        super(name, id, email);

        this.special= special;
    }
    getSpecial() {
        return this.special;
    }

    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;