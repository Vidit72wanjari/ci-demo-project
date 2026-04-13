const { add, subtract } = require('../app');

test('adds 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtract 5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2);
});