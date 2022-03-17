// call the constuctor so we can test it
// note that nothing is in the file yet; we'll worry about actually this after the test is written
const Manager = require('../lib/Manager');

// We are currently running the name property here that will have to change. that should be in the Employee constructor function not in Manager likewe have it cur
// test('gets Manager office number', () => {
//     const manager = new Manager('Sid', '1');
  
//     expect(manager.name).toBe('Sid');
//     expect(manager.special).toEqual(expect.stringContaining('391'));

// });

// test('gets role', () => {
//     const manager = new Manager('Sid', '391')

//     expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
// })

test('Creates manager object', () => {
    const manager = new Manager('Sid', '1', 'sid@gmail.com', '391');
  
    expect(manager.name).toBe('Sid');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('sid@gmail.com');
    expect(manager.special).toBe('391');

});

test('gets role', () => {
    const manager = new Manager('Sid', '1', 'sid@gmail.com', '391')

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})