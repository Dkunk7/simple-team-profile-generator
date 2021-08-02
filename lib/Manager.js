const Employee = require(`./Employee`);

class Manager extends Employee {
    constructor(data) {
        super(data);

        this.officeNumber = data.managerOffice;
    }

    getRole() {
        return `Manager`;
    }

    getOffice() {
        return this.officeNumber;
    }

}

module.exports = Manager;