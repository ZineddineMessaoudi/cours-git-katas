const factorial = require('./kata3.js');

test('test la factoriel de 5 qui est 120', () => {
    expect(factorial(5)).toBe(120);
});