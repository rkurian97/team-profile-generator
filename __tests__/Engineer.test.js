const Engineer= require('../lib/Engineer');

test('creates an engineer object', ()=> {
    const engineer= new Engineer('Dave', 'dave@email.com', 2, 'dave7');

    expect(engineer.name).toBe('Dave');
    expect(engineer.email).toBe('dave@email.com');
    expect(engineer.id).toBe(2);
    expect(engineer.github).toBe('dave7');
});

test("gets engineer github", ()=> {
    const engineer= new Engineer('Dave', 'dave@email.com', 2, 'dave7');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));

});

test("gets engineer role", ()=> {
    const engineer= new Engineer('Dave', 'dave@email.com', 2, 'dave7');

    expect(engineer.getRole()).toEqual('Engineer');

});