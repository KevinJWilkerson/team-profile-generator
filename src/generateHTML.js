// TODO: Create a function to generate HTML for Team Page
const generateHTML = (employeeData) => {
  if (!employeeData) {
    return "";
  }

  console.log("Parsed employee data: " + employeeData);

  return employeeData.map(
    ({ name, id, email, officeNumber, github, school, role }) => {
      let extended;
      if (officeNumber) {
        extended = `<h2>Office Number: ${officeNumber}</h3>`;
      } else if (github) {
        extended = `<h2>Github: ${github}</h3>`;
      } else if (school) {
        extended = `<h2>School: ${school}</h3>`;
      }
      return `
                <section class="card" id="employee-card">
                    <div class="card-header" id="employee-header">
                        <h1>${name}</h1>
                        <h2>Role: ${role}</h2>
                        <h2>ID: ${id}</h2>
                    </div>
                    <div class="card-body" id="employee-info">
                        <h2>Email: ${email}</h2>
                        ${extended}
                </section>
            `;
    }
  );
};
