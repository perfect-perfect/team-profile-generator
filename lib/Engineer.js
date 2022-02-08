const Employee = require('./Employee');

class Engineer extends Employee {
    // constructor(name, school) {
    //     super(name);

    //     this.name = name;
    //     this.school = school;
    // }

    // getSchool() {
    //     return `${this.school}`
    // }

    getRole() {
        return `Engineer`
    }
}

module.exports = Engineer;