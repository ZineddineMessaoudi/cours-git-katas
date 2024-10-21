const reverseString = require('./kata2.js');

test('doit renverser mots en stom', () => {
    expect(reverseString("mots")).toBe("stom");
});