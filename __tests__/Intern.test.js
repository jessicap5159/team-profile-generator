const Intern = require('../lib/Intern.js');

test('Can get intern school via getSchool()', () => {
    const testValue = 'internschool';
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

test('Can get intern school via getRole()', () => {
    const testValue = 'Intern';
    const e = new Intern("Foo", 1, "test@test.com", 100);

    expect(e.getRole()).toBe(testValue);
});

