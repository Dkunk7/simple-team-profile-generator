const Manager = require(`../lib/Manager`);

const testData = {name: `Gorb`,id: `400`, email: `newEmail`,managerOffice: `101`}

test(`creates a manager object`, () => {
    const manager = new Manager(testData)

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test(`returns the role of the manager`, () => {
    const manager = new Manager(testData)

    expect(manager.getRole()).toBe(`Manager`)
});

test(`returns the manager's office number`, () => {
    const manager = new Manager(testData)

    expect(manager.getOffice()).toEqual(expect.any(String))
});