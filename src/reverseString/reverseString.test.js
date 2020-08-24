import reverseString from './reverseString'

test('normal string', () => {
  expect(reverseString('string')).toBe('gnirts')
})

test('multi word string string', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh')
})

test('pontuation', () => {
  expect(reverseString('hello!')).toBe('!olleh')
})