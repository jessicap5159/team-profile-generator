// Variables

const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const fs = require('fs');
const teamMembers = [];

// Prompts for manager
const managerQuestions = () => {

    inquirer.prompt([
        {
            type: 'input',
            message: "Please enter your team manager's name.",
            name: "managername",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: "Provide your team manager's employee ID.",
            name: 'managerId',
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log('Please enter an ID number.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: "Provide your team manager's email address",
            name: 'managerEmail',
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log('Please enter an email address for your team manager.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: "Provide your team manager's office number.",
            name: 'managerOffice',
            validate: managerOfficeNum => {
                if (managerOfficeNum) {
                    return true;
                } else {
                    console.log('Please enter an office number.');
                    return false;
                }
            }
        },


    ])
  .then(answers => {
      const manager = new Manager(managerOfficeNum.managerOffice,fsdkds, fsdjkasf)
      teamMembers.push(manager);
      addMorePrompt();
  })  
}



// Prompt to add an engineer, an intern, or to finish building team
const addMorePrompt = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'addmore',
            message: 'Would you like to add an engineer, add an intern, or finish building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Finish building my team'],
            validate: addMoreInput => {
                if (addMoreInput) {
                    return true;
                } else {
                    console.log('Please make a selection.');
                    return false;
                }
            }
        },

    ]);
// .then + switch case; case: manager
// if engineer, call engineerQuestions
// if intern, call internQuestions
// if finish building my team, call function to generate HTML file

    // Prompts for engineer
    const engineerQuestions = () => {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Please enter your engineer's name.",
                    name: "engineername",
                    validate: engineerNameInput => {
                        if (engineerNameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name.');
                            return false;
                        }
                    }
                },
        
                {
                    type: 'input',
                    message: "Provide your engineer's employee ID.",
                    name: 'engineerId',
                    validate: engineerId => {
                        if (engineerId) {
                            return true;
                        } else {
                            console.log('Please enter an ID number.');
                            return false;
                        }
                    }
                },
        
                {
                    type: 'input',
                    message: "Provide your engineer's email address",
                    name: 'engineerEmail',
                    validate: engineerEmail => {
                        if (engineerEmail) {
                            return true;
                        } else {
                            console.log('Please enter an email address for your engineer.');
                            return false;
                        }
                    }
                },
        
                {
                    type: 'input',
                    message: "Provide your engineer's GitHub username.",
                    name: 'engineerGitHub',
                    validate: engineerGitHub => {
                        if (engineerGitHub) {
                            return true;
                        } else {
                            console.log('Please enter a GitHub username');
                            return false;
                        }
                    }
                },
        
        
            ])
        }
        // send to memory

addMorePrompt(); 
    // Prompts for intern
    const internQuestions = () => {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Please enter your intern's name.",
                    name: "internname",
                    validate: internNameInput => {
                        if (internNameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name.');
                            return false;
                        }
                    }
                },
        
                {
                    type: 'input',
                    message: "Provide your intern's employee ID.",
                    name: 'internId',
                    validate: internId => {
                        if (internId) {
                            return true;
                        } else {
                            console.log('Please enter an ID number.');
                            return false;
                        }
                    }
                },
        
                {
                    type: 'input',
                    message: "Provide your intern's email address",
                    name: 'internEmail',
                    validate: internEmail => {
                        if (internEmail) {
                            return true;
                        } else {
                            console.log('Please enter an email address for your intern.');
                            return false;
                        }
                    }
                },
        
                {
                    type: 'input',
                    message: "Provide the name of your intern's school.",
                    name: 'internSchool',
                    validate: internSchool => {
                        if (internSchool) {
                            return true;
                        } else {
                            console.log('Please enter a school name.');
                            return false;
                        }
                    }
                },
        
        
            ])
        }
        
        // send to memory

addMorePrompt(); 




}

// functions
managerQuestions();
// How to call rest of functions?