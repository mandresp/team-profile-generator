const renderManager = function (Manager) {
  return `<div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>Manager: ${Manager.name}</h3>
      </div>
      <div class="card-body">
        <p class="id">ID: ${Manager.id}</p>
        <p class="email">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
        <p class="office">Office Number: ${Manager.officeNum}</p>
      </div>
    </div>
  </div>`
}

const renderEngineer = function (Engineer) {
  return `<div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>Engineer: ${Engineer.name}</h3>
      </div>
      <div class="card-body">
        <p class="id">ID: ${Engineer.id}</p>
        <p class="email">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></p>
        <p class="github">Github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></p>
      </div>
    </div>
  </div>`
}

const renderIntern = function (Intern) {
  return `<div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>Intern: ${Intern.name}</h3>
      </div>
      <div class="card-body">
        <p class="id">ID: ${Intern.id}</p>
        <p class="email">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></p>
        <p class="id">School: ${Intern.school}</p>
      </div>
    </div>
  </div>`
};

generateHTML = (data) => {
  pageArray = []; 
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    if (role === 'Manager') {
      const managerCard = renderManager(employee);
      pageArray.push(managerCard);
    } if (role === 'Engineer') {
      const engineerCard = renderEngineer(employee);
      pageArray.push(engineerCard);
    } if (role === 'Intern') {
      const internCard = renderIntern(employee);
      pageArray.push(internCard);
    }
  }
  const employeeCards = pageArray.join('');

  const generate = generatePage(employeeCards); 
  return generate;
}

const generatePage = function (employeeCards) { 
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>My Team</title>
  </head>
  <body class="bg-dark">
    <header class="header">
        <span class="mt-4 mb-4 row h1 justify-content-center text-light">My Team</span>
    </header>
    <section class="container">
      <div class="row justify-content-center">
        ${employeeCards}
      </div>
    </section>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  </body>
  </html>`
}

module.exports = generateHTML;
