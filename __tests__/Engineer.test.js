const Engineer = require('../lib/Engineer.js');

test('create an engineer', () => {
    const engineer = new Engineer();

    expect(engineer.name).toBe('Bob');
    expect(engineer.name.length).toBeGreaterThan(0);
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toEqual('Engineer');
});
