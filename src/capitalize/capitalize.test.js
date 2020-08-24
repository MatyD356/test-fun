import capitalize from './capitalize'

test('should be defined', () => {
  expect(capitalize('string')).toBeDefined();
});

test('all lover case', () => {
  expect(capitalize('string')).toBe('String')
});

test('all upper case', () => {
  expect(capitalize('STRING')).toBe('String')
});

test('multi word string', () => {
  expect(capitalize('hello world')).toBe('Hello world')
})