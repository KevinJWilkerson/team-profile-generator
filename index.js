const inquirer = require("inquirer");
const path = require("path");
const generatePage = require("./src/generateHTML");
const { copyFile, writeFile } = require("./utils/generate-page");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];
const idArr = [];

const promptManager = () => {
  console.log(`
    =========================
    Enter Manager Information
    =========================
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "name",
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("You must enter the team manager's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the team manager's employee ID?",
        name: "id",
        validate: (managerIdInput) => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("You must enter the team manager's ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the team manager's email address?",
        name: "email",
        validate: (managerEmailInput) => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("You must enter the team manager's email.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNumber",
        validate: (managerOfficeNumberInput) => {
          if (managerOfficeNumberInput) {
            return true;
          } else {
            console.log("You must enter the team manager's ID.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerNameInput,
        answers.managerIdInput,
        answers.managerEmailInput,
        answers.managerOfficeNumberInput
      );
      teamMembers.push(manager);
      idArr.push(answers.managerIdInput);
      promptNonManager();
    });
};

const promptNonManager = () => {
  console.log(`
    ==========================
    Add an Additional Employee
    ==========================
    `);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "roleChoice",
        message: "Which type of employee would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more employees.",
        ],
      },
    ])
    .then((choice) => {
      switch (choice.roleChoice) {
        case "Engineer":
          engineerEntry();
          break;
        case "Intern":
          internEntry();
          break;
        default:
          console.log(teamMembers);
          let pageHTML = generatePage(teamMembers);
          return writeFile(pageHTML);
      }
    });
};

const engineerEntry = () => {
  console.log(`
    ================================
    Enter the engineer's information:
    ================================
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerNameInput",
        message: "Enter the engineer's name.",
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("You must enter a name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerIdInput",
        message: "Enter the engineer's employee ID number.",
        validate: (engineerIdInput) => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log("You must enter an ID number.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerEmailInput",
        message: "Enter the engineer's email address.",
        validate: (engineerEmailInput) => {
          if (engineerEmailInput) {
            return true;
          } else {
            console.log("You must enter an address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerGithubInput",
        message: "Enter the engineer's Github username.",
        validate: (engineerGithubInput) => {
          if (engineerGithubInput) {
            return true;
          } else {
            console.log("You must enter a Github username.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerNameInput,
        answers.engineerIdInput,
        answers.engineerEmailInput,
        answers.engineerGithubInput
      );
      teamMembers.push(engineer);
      idArr.push(answers.engineerIdInput);
      promptNonManager();
    });
};

const internEntry = () => {
  console.log(`
      ================================
      Enter the intern's information:
      ================================
      `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internNameInput",
        message: "Enter the intern's name.",
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log("You must enter a name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internIdInput",
        message: "Enter the intern's employee ID number.",
        validate: (internIdInput) => {
          if (internIdInput) {
            return true;
          } else {
            console.log("You must enter an ID number.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internEmailInput",
        message: "Enter the intern's email address.",
        validate: (internEmailInput) => {
          if (internEmailInput) {
            return true;
          } else {
            console.log("You must enter an address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internSchoolInput",
        message: "Enter the intern's school.",
        validate: (internSchoolInput) => {
          if (internSchoolInput) {
            return true;
          } else {
            console.log("You must enter a school.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internNameInput,
        answers.internIdInput,
        answers.internEmailInput,
        answers.internSchoolInput
      );
      teamMembers.push(intern);
      idArr.push(answers.internIdInput);
      promptNonManager();
    });
};

promptManager();
