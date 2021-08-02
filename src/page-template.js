const Engineer = require(`../lib/Engineer`);
const Intern = require(`../lib/Intern`);
const Manager = require(`../lib/Manager`);

const generateManager = teamData => {
    this.manager = new Manager(teamData);
    return `
        <div class = "row">
            <div class = "card col-3 flex-column mb-3">
                <div class = "card-header">
                    ${this.manager.getName()}
                </div>
                <div class = "card-body">
                    <h5 class = "card-title">${this.manager.getRole()}</h5>
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item">ID: ${this.manager.getId()}</li>
                        <li class = "list-group-item">Email: ${this.manager.getEmail()}</li>
                        <li class = "list-group-item">Office number: ${this.manager.getOffice()}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
}

const generateEngineer = engineerData => {
    if (!engineerData[0]) {
        return ``;
    }
    const engineerArr = [];
    for(i = 0; i < engineerData.length; i++) {
        this.engineer = new Engineer(engineerData[i]);
        engineerArr.push(`
        <div class = "card col-3 flex-column mb-3">
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
    `)
    }
    return `
    <div class = "row justify-content-evenly">
        ${engineerArr.join(` `)}
    </div>
    `

}

const generateIntern = internData => {
    if (!internData[0]) {
        return ``;
    }
    const internArr = [];
    for (i = 0; i < internData.length; i++) {
        this.intern = new Intern(internData[i]);
        internArr.push(`
        <div class = "card col-3 flex-column">
            <div class = "card-header">
                ${this.intern.getName()}
            </div>
            <div class = "card-body">
                <h5 class = "card-title">${this.intern.getRole()}</h5>
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item">ID: ${this.intern.getId()}</li>
                    <li class = "list-group-item">Email: ${this.intern.getEmail()}</li>
                    <li class = "list-group-item">School: ${this.intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    `)
    }
    return `
    <div class = "row justify-content-evenly">
        ${internArr.join(` `)}
    </div>
    `
}

module.exports = teamData => {

    const { engineerList, internList, ...manager } = teamData;
    console.log(engineerList);
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
                <h1 class = "m-5 text-center page-title">My Team</h1>
            </header>

            <main class = "container">
                ${generateManager(manager)}
                ${generateEngineer(engineerList)}
                ${generateIntern(internList)}
            </main>
    `;
}