const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, office) {
        super(name);

        this.name = name;
        this.office = office;
    }

    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;