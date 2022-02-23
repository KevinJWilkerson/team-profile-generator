// Constructor function for Intern

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school, role) {
    super(name, id, email);
    this.school = school;
    this.role = "intern";
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
