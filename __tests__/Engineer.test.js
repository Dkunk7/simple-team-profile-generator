const Engineer = require(`../lib/Engineer`);

const testData = {name: `Gary`,id: `22`, email: `newEmail`,github: `githubEX`}

test(`creates an engineer object`, () => {
    const engineer = new Engineer(testData)

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test(`returns the role of the engineer`, () => {
    const engineer = new Engineer(testData)

    expect(engineer.getRole()).toBe(`Engineer`)
});

test(`returns the github username of the engineer`, () => {
    const engineer = new Engineer(testData)

    expect(engineer.getGithub()).toEqual(expect.any(String))
});