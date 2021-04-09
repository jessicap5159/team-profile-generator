const Manager = require('../lib/Manager.js');

test('create a manager', () => {
    const manager = new Manager();

    expect(manager.name).toBe('Bob');
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toEqual('Manager');
});
