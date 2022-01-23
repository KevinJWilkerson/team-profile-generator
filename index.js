const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const getUserInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("You must enter the team manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the team manager's employee ID?",
            name: 'id',
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("You must enter the team manager's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the team manager's email address?",
            name: 'email',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("You must enter the team manager's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'officeNumber',
            validate: managerOfficeNumberInput => {
                if (managerOfficeNumberInput) {
                    return true;
                } else {
                    console.log("You must enter the team manager's ID.");
                    return false;
                }
            }
        },
    ])
};

getUserInput();