const inquirer = require(`inquirer`);

const { writeFile, copyFile } = require(`./utils/generate-site.js`);

const generatePage = require(`./src/page-template.js`);

const promptInput = () => {
    return inquirer
        .prompt([
            {
                type: `input`,
                name: `name`,
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
                name: `id`,
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
                name: `email`,
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

const addEngineer = (teamData) => {
    return inquirer
        .prompt([
            {
                type: `input`,
                name: `name`,
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
                name: `id`,
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
                name: `email`,
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
                name: `github`,
                message: `Enter the GitHub username of the engineer`,
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's GitHub`);
                        return false;
                    }
                }
            }
        ]).then(employeeData => {
            // console.log(employeeData);
            // console.log(teamData);
            teamData.engineerList.push(employeeData);
            // console.log(teamData);
            return promptToAdd(teamData);
        })//.then(promptToAdd(teamData)) <-- This was causing promptToAdd to run every time a question is asked from this point onward.
}

const addIntern = teamData => {
    return inquirer
        .prompt([
            {
                type: `input`,
                name: `name`,
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
                name: `id`,
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
                name: `email`,
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
        ]).then(employeeData => {
            teamData.internList.push(employeeData);
            return promptToAdd(teamData);
        })
           
        
}
const promptToAdd = teamData => {
    if (!teamData.internList) {
        teamData.internList = [];
    }
    if (!teamData.engineerList) {
        teamData.engineerList = [];
    }
    return inquirer
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
        ]).then(response => {
            if (response.choice === `Add an engineer`) {
                return addEngineer(teamData);
            } else if (response.choice === `Add an intern`) {
                return addIntern(teamData);
            }
            console.log(teamData);
        })
}

promptInput()
    .then(promptToAdd)
    // .then(teamData => {
    //     return generatePage(teamData);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // // possibly add or rearrange some of this?
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .catch(err => {
    //     console.log(err);
    // });