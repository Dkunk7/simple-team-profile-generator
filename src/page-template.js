const Engineer = require(`../lib/Engineer`);
const Intern = require(`../lib/Intern`);
const Manager = require(`../lib/Manager`);

const generateManager = teamData => {
    this.manager = new Manager(teamData);
    return `
        <div class = "row justify-content-evenly">
            <div class = "card col-3 mb-3 p-0">
                <div class = "card-header fs-4">
                    ${this.manager.getName()}
                </div>
                <div class = "card-body">
                    <h4 class = "card-title"><i class="fas fa-mug-hot"></i> ${this.manager.getRole()}</h5>
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item">ID: ${this.manager.getId()}</li>
                        <li class = "list-group-item">Email: <a href = "mailto:${this.manager.getEmail()}" target = "_blank">${this.manager.getEmail()}</a></li>
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
        <div class = "card col-3 mb-3 mx-3 p-0">
            <div class = "card-header fs-4">
                ${this.engineer.getName()}
            </div>
            <div class = "card-body">
                <h4 class = "card-title"><i class="fas fa-glasses"></i> ${this.engineer.getRole()}</h5>
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item">ID: ${this.engineer.getId()}</li>
                    <li class = "list-group-item">Email: <a href = "mailto:${this.engineer.getEmail()}" target = "_blank">${this.engineer.getEmail()}</a></li>
                    <li class = "list-group-item" >Github: <a href = "https://github.com/${this.engineer.getGithub()}" target = "_blank">${this.engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    `)
    }
    return `
    <div class = "row justify-content-center">
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
        <div class = "card col-3 mb-3 mx-3 p-0">
            <div class = "card-header fs-4">
                ${this.intern.getName()}
            </div>
            <div class = "card-body">
                <h4 class = "card-title"><i class="fas fa-user-graduate"></i> ${this.intern.getRole()}</h5>
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item">ID: ${this.intern.getId()}</li>
                    <li class = "list-group-item">Email: <a href = "mailto:${this.intern.getEmail()}" target = "_blank">${this.intern.getEmail()}</a></li>
                    <li class = "list-group-item">School: ${this.intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    `)
    }
    return `
    <div class = "row justify-content-center">
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
            <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
            <link rel = "stylesheet" href = "style.css">
        </head>

        <body>
            <header>
                <h1 class = "mb-5 text-center banner p-5">My Team</h1>
            </header>

            <main class = "container">
                ${generateManager(manager)}
                ${generateEngineer(engineerList)}
                ${generateIntern(internList)}
            </main>
    `;
}