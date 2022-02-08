const Intern = require('../lib/Intern');

test('get school', () => {
    const intern = new Intern('Sid', 'Harvard');

    expect(intern.getSchool()).toEqual(expect.stringContaining('Harvard'));
})

test('get intern role', () => {
    const intern = new Intern('Sid', 'Harvard');
    
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})