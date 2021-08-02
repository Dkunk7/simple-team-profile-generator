const Employee = require(`./Employee`);

class Intern extends Employee {
    constructor(internData) {
        super(internData);

        this.school = internData.internSchool;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return `Intern`;
    }
    
}

module.exports = Intern;