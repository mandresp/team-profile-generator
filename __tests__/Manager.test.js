const Manager = require("../lib/Manager");

test ("Can set office number using constructor", () => {
    const employee = new Manager("Andres", 1, "andres@email.com", 1);
    expect(employee.getOfficeNum()).toBe(1);
})