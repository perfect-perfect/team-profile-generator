const Employee = require('../lib/Employee');

test('creates the employee object', () => {
    const employee = new Employee('Gilberto', '01', 'gil@gmail.com');

    expect(employee.name).toBe('Gilberto');
    expect(employee.id).toBe('01');
    expect(employee.email).toBe('gil@gmail.com')
});

test('gets employee name', () => {
    const employee = new Employee('Gilberto', '01', 'gil@gmail.com');

    expect(employee.getName()).toBe('Gilberto');
})

test('gets employee id', () => {
    const employee = new Employee('Gilberto', '01', 'gil@gmail.com');
    expect(employee.getId()).toBe('01');
})

test('gets employee email', () => {
    const employee = new Employee('Gilberto', '01', 'gil@gmail.com');
    expect(employee.getEmail()).toBe('gil@gmail.com');
})