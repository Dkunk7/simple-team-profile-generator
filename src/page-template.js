const { default: generateEmptyCoverage } = require("@jest/reporters/build/generateEmptyCoverage");
const Engineer = require(`../lib/Engineer`);
const Intern = require(`../lib/Intern`);
const Manager = require(`../lib/Manager`);

const generateManager = teamData => {
    this.manager = new Manager(teamData);
    return `
        <div class = "card">
            <div class = "card-header">
                ${this.manager.getName()}
            </div>
            <div class = "card-body">
                <h5 class = "card-title">${this.manager.getRole()}</h5>
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item">ID: ${this.manager.getId()}</li>
                    <li class = "list-group-item">Email: ${this.manager.getEmail()}</li>
                    <li class = "list-group-item">Office number: ${this.manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    `
}

const generateEngineer = engineerData => {
    if (!engineerData[0]) {
        return ``;
    }
    engineerData.forEach(engineer => {
        this.engineer = new Engineer(engineerData);
        return `
        <div class = "card">
            <div class = "card-header">
                ${this.engineer.getName()}
            </div>
            <div class = "card-body">
                <h5 class = "card-title">${this.engineer.getRole()}</h5>
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item">ID: ${this.engineer.getId()}</li>
                    <li class = "list-group-item">Email: ${this.engineer.getEmail()}</li>
                    <li class = "list-group-item" href = "https://github.com/${this.engineer.getGithub}">GitHub: ${this.engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
    `
    })

}

const generateIntern = internData => {
    if (!internData[0]) {
        return ``;
    }
}

const generatePage = teamData => {
    return `
        <!DOCTYPE html>
        <html lang = "en">

        <head>
            <meta charset = "UTF-8">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
            <meta http-equiv = "X-UA-Compatible" content = "ie=edge">
            <title>Team Page</title>

            <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
            <link rel = "stylesheet" href = "style.css">
        </head>

        <body>
            <header>

            </header>

            <main class = "container">
                ${generateManager}
                ${generateEngineer(teamData.engineerList)}
                ${generateIntern(teamData.internList)}
            </main>
    `
}

// module.exports = 