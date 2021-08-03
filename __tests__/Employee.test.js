const Employee = require(`../lib/Employee`);

const testData = {name: `Don`,id: `99`,email: `emailExample`}
test(`creates an employee object`, () => {
    const employee = new Employee(testData)

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test(`returns the role of the employee`, () => {
    const employee = new Employee(testData)

    expect(employee.getRole()).toBe(`Employee`)
});

test(`returns the id of the employee`, () => {
    const employee = new Employee(testData)
    
    expect(employee.getId()).toEqual(expect.any(String))
});

test(`returns the email of the employee`, () => {
    const employee = new Employee(testData)
    
    expect(employee.getEmail()).toEqual(expect.any(String))
});

test(`returns the name of the employee`, () => {
    const employee = new Employee(testData)
    
    expect(employee.getName()).toEqual(expect.any(String))
});