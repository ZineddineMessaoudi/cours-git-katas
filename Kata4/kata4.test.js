const countVowels = require('./kata4.js');

test('donne le nombre de voyelle dans le mot -Bonjour- qui est 3', () => {
    expect(countVowels("Bonjour")).toBe(3);
});