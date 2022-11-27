const Intern = require("../lib/Intern");

test ("Can set intern's school using constructor", () => {
    const employee = new Intern("Andres", 1, "andres@email.com", "University of South Carolina");
    expect(employee.getSchool()).toBe("University of South Carolina");
})