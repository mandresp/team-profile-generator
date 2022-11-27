const employeeArray = [];
const generateHTML = require("./develop/generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

const addManager = () => {
    return inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "What is the name of this team's manager?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid manager name is required");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid manager ID is required");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
        },
    },
    {
        type: "input",
        name: "officeNum",
        message: "What is the manager's office number?",
    }])

    .then(managerInput => {
        const { name, id, email, officeNum } = managerInput; 
        const manager = new Manager(name, id, email, officeNum);

        employeeArray.push(manager); 
        console.log(employeeArray); 
    })
}

const addEmployee = () => {
    return inquirer.prompt ([
    {
        type: "list",
        name: "role",
        message: "Please choose the employee's role",
        choices: ["Engineer", "Intern"]
    },
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid employee name is required");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid employee ID is required");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
        validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
        },
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        when: (input) => input.role === "Engineer",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "school",
        message: "Which school does the intern attend?",
        when: (input) => input.role === "Intern",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid School name is required");
            }
            return true;
        }
    },
    {
        type: "confirm",
        name: "createHTML",
        message: 'Would you like to add more employees?',
        default: false
    }
    ])
    .then(employeeInput => {
        const { name, id, email, role, github, school, createHTML } = employeeInput; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        employeeArray.push(employee); 
        console.log(employeeArray); 

        if (createHTML) {
            return addEmployee(employeeArray);
        } else {
            return employeeArray;
        }
    })
}

const writeHTML = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return
        } else {
        console.log("Your HTML has been generated.")
        }
    })
}

addManager()
  .then(addEmployee)
  .then(employeeArray => {
    return generateHTML(employeeArray);
  })
  .then(generateHTML => {
    return writeHTML(generateHTML);
  })
  .catch(err => {
 console.log(err);
  });