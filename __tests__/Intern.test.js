const Intern = require('../lib/Intern.js');

test('create an intern', () => {
    const intern = new Intern();

    expect(intern.name).toBe('Bob');
    expect(intern.name.length).toBeGreaterThan(0);
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toEqual('Intern');
});
