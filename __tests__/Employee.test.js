const Employee = require('../lib/Employee.js');

test('create an employee', () => {
    const employee = new Employee('Bob',12345, 'bob@email.com', 'Employee');
    console.log(employee);
    expect(employee.name).toBe('Bob');
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Employee');
});
