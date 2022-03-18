const Manager = require('../lib/Manager');

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