// Variables

const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const teamMembers = [];
const page = require("./src/page-template");

// Prompts for manager
const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter your team manager's name.",
        name: "managername",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter a name.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Provide your team manager's employee ID.",
        name: "id",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter an ID number.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Provide your team manager's email address",
        name: "managerEmail",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter an email address for your team manager.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Provide your team manager's office number.",
        name: "managerOffice",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter an office number.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managername,
        answers.id,
        answers.managerEmail,
        answers.managerOffice
      );
      teamMembers.push(manager);
      addMorePrompt().then((res) => {
        console.log(res.addmore);
        switch (res.addmore) {
          case "Add Engineer":
            engineerQuestions();
            break;
          case "Add Intern":
            internQuestions();
            break;
          case "Finish building my team":
            const data = page.generateStaff(teamMembers);
            console.log(data)
            fs.writeFile("./output/index.html", data, (err, data) => {
                if (err) {
                    return console.log(err);
                  }
                  console.log(data);
            });
            break;
          default:
            console.log("OH NO! We should never be here!");
            break;
        }
      });
    });
};

// Prompt to add an engineer, an intern, or to finish building team
const addMorePrompt = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "addmore",
      message:
        "Would you like to add an engineer, add an intern, or finish building your team?",
      choices: ["Add Engineer", "Add Intern", "Finish building my team"],
    },
  ]);
};

// Prompts for engineer
const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter your engineer's name.",
        name: "engineername",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter a name.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Provide your engineer's employee ID.",
        name: "engineerId",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter an ID number.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Provide your engineer's email address",
        name: "engineerEmail",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter an email address for your engineer.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Provide your engineer's GitHub username.",
        name: "engineerGitHub",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter a GitHub username");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineername,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGitHub
      );
      teamMembers.push(engineer);
      addMorePrompt().then((res) => {
        console.log(res.addmore);
        switch (res.addmore) {
          case "Add Engineer":
            engineerQuestions();
            break;
          case "Add Intern":
            internQuestions();
            break;
          case "Finish building my team":
            const data = page.generateStaff(teamMembers);
            console.log(data)
            fs.writeFile("./output/index.html", data, (err, data) => {
                if (err) {
                    return console.log(err);
                  }
                  console.log(data);
            });
            break;
          default:
            console.log("OH NO! We should never be here!");
            break;
        }
      });
    });
};




// Prompts for intern
const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter your intern's name.",
        name: "internname",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter a name.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Provide your intern's employee ID.",
        name: "internId",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter an ID number.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Provide your intern's email address",
        name: "internEmail",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter an email address for your intern.");
            return false;
          }
        },
      },

      {
        type: "input",
        message: "Provide the name of your intern's school.",
        name: "internSchool",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please enter a school name.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internname,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamMembers.push(intern);
      addMorePrompt().then((res) => {
        console.log(res.addmore);
        switch (res.addmore) {
          case "Add Engineer":
            engineerQuestions();
            break;
          case "Add Intern":
            internQuestions();
            break;
          case "Finish building my team":
            const data = page.generateStaff(teamMembers);
            console.log(data)
            fs.writeFile("./output/index.html", data, (err, data) => {
                if (err) {
                    return console.log(err);
                  }
                  console.log(data);
            });
            break;
          default:
            console.log("OH NO! We should never be here!");
            break;
        }
      });
    });
};


// function call
managerQuestions();