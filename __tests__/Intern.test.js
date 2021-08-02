const { test, expect } = require("@jest/globals");
const Intern = require(`../lib/Intern`);

const testData = {name: `Josh`,id: `12`, email: `newEmail`,internSchool: `SChool ExamplE`}

test(`creates an intern object`, () => {
    const intern = new Intern(testData)

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test(`returns the role of the intern`, () => {
    const intern = new Intern(testData)

    expect(intern.getRole()).toBe(`Intern`)
});

test(`returns the school of the intern`, () => {
    const intern = new Intern(testData)

    expect(intern.getSchool()).toEqual(expect.any(String))
});