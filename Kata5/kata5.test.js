const findMax = require('./kata5.js');

test('trouve le nombre maximal selon le tableau et c est 9 ', () => {
    expect(findMax([3, 7, 2, 9, 5])).toBe(9);
});