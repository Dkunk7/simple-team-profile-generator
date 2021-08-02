const Employee = require(`./Employee`);

class Engineer extends Employee {
    constructor(engineerData) {
        super(engineerData);

        this.github = engineerData.github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return `Engineer`;
    }

}

module.exports = Engineer;