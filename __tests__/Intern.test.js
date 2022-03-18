const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('iggy', '3', 'iggy@gmail.com', 'Harvard');

    expect(intern.name).toBe('iggy');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('iggy@gmail.com')
    expect(intern.getSpecial()).toEqual(expect.stringContaining('Harvard'));
})

test('get school', () => {
    const intern = new Intern('iggy', '3', 'iggy@gmail.com', 'Harvard');

    expect(intern.getSpecial()).toEqual(expect.stringContaining('Harvard'));
})

test('get intern role', () => {
    const intern = new Intern('iggy', '3', 'iggy@gmail.com', 'Harvard');
    
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})