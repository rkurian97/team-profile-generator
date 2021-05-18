const Intern= require('../lib/Intern');

test('creates an intern object', ()=> {
    const intern= new Intern('Dave', 'dave@email.com', 2, 'UT Austin');

    expect(intern.name).toBe('Dave');
    expect(intern.email).toBe('dave@email.com');
    expect(intern.id).toBe(2);
    expect(intern.school).toBe('UT Austin');
});

test("gets intern school", ()=> {
    const intern= new Intern('Dave', 'dave@email.com', 2, 'UT Austin');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));

});

test("gets intern role", ()=> {
    const intern= new Intern('Dave', 'dave@email.com', 2, 'UT Austin');

    expect(intern.getRole()).toEqual('Intern');

});