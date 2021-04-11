// Variables

const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const teamMembers = [];

// Prompts for manager
const managerQuestions = () => {

    inquirer.prompt([
        {
            type: 'input',
            message: "Please enter your team manager's name.",
            name: "managername",
            validate: answer => {
                if (answer) {
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
            validate: answer => {
                if (answer) {
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
            validate: answer => {
                if (answer) {
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
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter an office number.');
                    return false;
                }
            }
        },


    ])
  .then(answers => {
      const manager = new Manager(answer.managername, answer.managerID, answer.managerEmail, answer.managerOffice);
      teamMembers.push(manager);
      addMorePrompt()
      .then 
      switch (addMorePrompt) {
          case 1: engineerQuestions();
          break;
          case 2: internQuestions();
          break;
          case 3: generateManager();
      
      };
  })  
}



// Prompt to add an engineer, an intern, or to finish building team
const addMorePrompt = () => {
     inquirer.prompt([
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


    // Prompts for engineer
    const engineerQuestions = () => {
         inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Please enter your engineer's name.",
                    name: "engineername",
                    validate: answer => {
                        if (answer) {
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
                    validate: answer => {
                        if (answer) {
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
                    validate: answer => {
                        if (answer) {
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
                    validate: answer => {
                        if (answer) {
                            return true;
                        } else {
                            console.log('Please enter a GitHub username');
                            return false;
                        }
                    }
                },
        
        
            ])
            .then(answers => {
                const engineer = new Engineer(answer.engineername, answer.engineerId, answer.engineerEmail, answer.engineerGitHub);
                teamMembers.push(engineer);
                addMorePrompt()
                .then 
                switch (addMorePrompt) {
                    case 1: engineerQuestions();
                    break;
                    case 2: internQuestions();
                    break;
                    case 3: generateEngineer();
                
                };
            })  
        }
       

addMorePrompt(); 
    // Prompts for intern
    const internQuestions = () => {
         inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Please enter your intern's name.",
                    name: "internname",
                    validate: answer => {
                        if (answer) {
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
                    validate: answer => {
                        if (answer) {
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
                    validate: answer => {
                        if (answer) {
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
                    validate: answer => {
                        if (answe) {
                            return true;
                        } else {
                            console.log('Please enter a school name.');
                            return false;
                        }
                    }
                },
        
        
            ])
            .then(answers => {
                const intern = new Intern(answer.internname, answer.internId, answer.internEmail, answer.internSchool);
                teamMembers.push(intern);
                addMorePrompt()
                .then 
                switch (addMorePrompt) {
                    case 1: engineerQuestions();
                    break;
                    case 2: internQuestions();
                    break;
                    case 3: generateIntern();
                
                };
            })  
        }
        
    

addMorePrompt(); 




}

// functions
managerQuestions();
