const Employee = require('../lib/Employee.js');

test('create an employee', () => {
    const employee = new Employee('Bob');

    expect(employee.name).toBe('Bob');
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Employee');
});
