const Manager= require('../lib/Manager');

test('creates an manager object', ()=> {
    const manager= new Manager('Dave', 'dave@email.com', 2, 122);

    expect(manager.name).toBe('Dave');
    expect(manager.email).toBe('dave@email.com');
    expect(manager.id).toBe(2);
    expect(manager.officeNumber).toBe(122);
});

test("gets manager office number", ()=> {
    const manager= new Manager('Dave', 'dave@email.com', 2, 122);

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);

});

test("gets manager role", ()=> {
    const manager= new Manager('Dave', 'dave@email.com', 2, 122);

    expect(manager.getRole()).toEqual('Manager');

});