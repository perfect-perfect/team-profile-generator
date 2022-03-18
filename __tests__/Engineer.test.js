const Engineer = require('../lib/Engineer');

test('Creates engineer object', () => {
    const engineer = new Engineer('gil', '2', 'gil@gmail.com', 'perfect-perfect');

    expect(engineer.name).toBe('gil');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('gil@gmail.com');
    expect(engineer.special).toBe('perfect-perfect');
})

// test('gets engineer GitHub username', () => {
//     const engineer = new Engineer('perfect-perfect');

//     expect(engineer.username).toBe('perfect-perfect');
// })

// Get GitHub
test('gets GitHub', () => {
    const engineer = new Engineer('gil', '2', 'gil@gmail.com', 'perfect-perfect');

    expect(engineer.getSpecial()).toEqual(expect.stringContaining('https://github.com/perfect-perfect'))
})

// getRole() test
test('get engineer role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
}) 