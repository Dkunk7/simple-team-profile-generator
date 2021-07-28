const inquirer = require(`inquirer`);

const { writeFile, copyFile } = require(`./utils/generate-site.js`);

const generatePage = require(`./src/page-template.js`);

const promptInput = () => {
    return inquirer
        .prompt([
            {
                type: `input`,
                name: `managerName`,
                message: `Enter the name of the team manager:`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the manager's name`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `managerID`,
                message: `Enter the manager's employee ID:`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the manager's ID`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `managerEmail`,
                message: `Enter the email of the team manager:`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the manager's email`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `managerOffice`,
                message: `Enter the office number of the team manager:`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the manager's office number`);
                        return false;
                    }
                }
            },
        ])
}

const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: `input`,
                name: `engineerName`,
                message: `Enter the name of the engineer`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's name`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `engineerID`,
                message: `Enter the employee ID of the engineer`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's ID`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `engineerEmail`,
                message: `Enter the email of the engineer`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's email`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `engineerGitHub`,
                message: `Enter the GitHub username of the engineer`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's GitHub`);
                        return false;
                    }
                }
            },
        ]).then(promptToAdd)
}

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: `input`,
                name: `internName`,
                message: `Enter the name of the intern`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's name`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `internID`,
                message: `Enter the ID of the intern`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's ID`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `internEmail`,
                message: `Enter the email of the intern`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's email`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `internSchool`,
                message: `Enter the intern's school`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's school`);
                        return false;
                    }
                }
            },
        ]).then(promptToAdd)
}
const promptToAdd = () => {
    inquirer
        .prompt([
            {
                type: `list`,
                name: `choice`,
                message: `What would you like to do next?`,
                choices: [`Add an engineer`, `Add an intern`, `Finish`],
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please choose one`);
                        return false;
                    }
                }
            },
        ]).then(choice => {
            if (choice.choice === `Add an engineer`) {
                return addEngineer();
            } else if (choice.choice === `Add an intern`) {
                return addIntern();
            }
        })
}

promptInput()
    .then(promptToAdd)
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    // possibly add or rearrange some of this?
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .catch(err => {
        console.log(err);
    });