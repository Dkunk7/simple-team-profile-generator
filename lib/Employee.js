class Employee {
    constructor(data) {
       this.name = data.name;
       this.id = data.id;
       this.email = data.email;
    }

    getRole() {
        return `Employee`;
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee;