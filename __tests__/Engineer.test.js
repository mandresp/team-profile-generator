const Engineer = require("../lib/Engineer");

test ("Can set engineer's GitHub using constructor", () => {
    const employee = new Engineer("Andres", 1, "andres@email.com", "mandresp");
    expect(employee.getGithub()).toBe("mandresp");
})