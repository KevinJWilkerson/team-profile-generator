// TODO: Create a function to generate HTML for Team Page
const generateEmployeeHTML = (employeeData) => {
  if (!employeeData) {
    return "no data";
  }

  console.log("Parsed employee data: " + employeeData);

  return employeeData.map(
    ({ name, id, email, officeNumber, github, school, role }) => {
      let extended;
      if (officeNumber) {
        extended = `<h2>Office Number: ${officeNumber}</h3>`;
      } else if (github) {
        extended = `<h2>Github: <a href="https://www.github.com/${github}" target="_blank">${github}</a></h3>`;
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
                        <h2>Email: <a href="mailto:${email}">${email}</a></h2>
                        ${extended}
                </section>
            `;
    }
  );
};

module.exports = (employeeData) => {
  console.log("teamData here: " + typeof employeeData);
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/src/style.css">
    </head>
        
    <body>
        <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            <nav class="flex-row">
            
            </nav>
        </div>
        </header>
        <main class="container my-5">
            ${generateEmployeeHTML(employeeData)}
        </main>
        <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by Kevin Wilkerson</h3>
        </footer>
    </body>
    </html>
    `;
};
