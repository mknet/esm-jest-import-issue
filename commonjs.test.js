
jest.mock('request', () => {
    return (first, second, third) => {
        return 'fake bla';
    };
});

const req = require('./commonjs.js');

test('test commonjs', () => {
    expect(req('http://www.google.de')).toBe('fake bla');
})