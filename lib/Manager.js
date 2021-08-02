const Employee = require(`./Employee`);

class Manager extends Employee {
    constructor(data) {
        super(data);

        this.officeNumber = data.managerOffice;
    }

    getRole() {
        return `Manager`;
    }

}

module.exports = Manager;