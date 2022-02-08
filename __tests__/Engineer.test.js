const Engineer = require('../lib/Engineer');

test('gets engineer GitHub username', () => {
    const engineer = new Engineer('perfect-perfect');

    expect(engineer.username).toBe('perfect-perfect');
})

// not sure what getGithub is suppose to do
test('gets GitHub', () => {
    const engineer = new Engineer('perfect-perfect');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('https://github.com/perfect-perfect'))
})

// getRole() test
test('get engineer role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
}) 