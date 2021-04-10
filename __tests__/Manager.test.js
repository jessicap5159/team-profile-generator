const Manager = require('../lib/Manager.js');

test("Can get office number via getOfficeNumber()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });


  test("Can get manager role via getRole()", () => {
    const testValue = 'Manager';
    const e = new Manager("Foo", 1, "test@test.com", 100);

    expect(e.getRole()).toBe(testValue);
  });