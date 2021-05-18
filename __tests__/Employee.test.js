const Employee= require('../lib/Employee');

test('creates an employee object', ()=> {
    const employee= new Employee('Dave', 'dave@email.com', 2);

    expect(employee.name).toBe('Dave');
    expect(employee.email).toBe('dave@email.com');
    expect(employee.id).toBe(2);
});

test("gets employee name", ()=> {
    const employee= new Employee('Dave', 'dave@email.com', 2);

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));

});

test("gets employee id", ()=> {
    const employee= new Employee('Dave', 'dave@email.com', 2);

    expect(employee.getId()).toEqual(employee.id);

});

test("gets employee email", ()=> {
    const employee= new Employee('Dave', 'dave@email.com', 2);

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));

});

test("gets employee role", ()=> {
    const employee= new Employee('Dave', 'dave@email.com', 2);

    expect(employee.getRole()).toEqual('Employee');

});