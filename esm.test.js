const loader = require('@std/esm')(module, { cjs: true, esm: 'js' });

jest.mock('request', () => {
    return (first, second, third) => {
        return 'fake bla';
    };
});

const req = loader('./esm.js').default;

test('test esm', () => {
    expect(req('http://www.google.de')).toBe('fake bla');
})