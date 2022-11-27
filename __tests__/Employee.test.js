const Employee = require("../lib/Employee");

test ("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
})

test ("Can set employee properties using constructor", () => {
    const employee = new Employee("Andres", 1, "andres@email.com");
    expect(employee.name).toBe("Andres");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("andres@email.com");
})

test ("Can we get the employee name", () => {
    const employee = new Employee("Andres");
    expect(employee.getName()).toBe("Andres");
})

test ("Can we get the employee ID", () => {
    const employee = new Employee("Andres", 1);
    expect(employee.getId()).toBe(1);
})

test ("Can we get the employee email", () => {
    const employee = new Employee("Andres", 1, "andres@email.com");
    expect(employee.getEmail()).toBe("andres@email.com");
})

test ("Does getRole return employee", () => {
    const employee = new Employee("Andres", 1, "andres@email.com");
    expect(employee.getRole()).toBe("Employee");
})