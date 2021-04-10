const Engineer = require('../lib/Engineer.js');

test("Can get GitHub username via getGitHub()", () => {
    const testValue = 'bobgithub';
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
  });


  test("Can get engineer role via getRole()", () => {
    const testValue = 'Engineer';
    const e = new Engineer("Foo", 1, "test@test.com", 100);

    expect(e.getRole()).toBe(testValue);
  });