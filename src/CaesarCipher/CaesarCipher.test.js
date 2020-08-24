import caesarCipher from './CaesarCipher'

test('single letter', () => {
  expect(caesarCipher('a')).toBe('b')
})
test('z wraping', () => {
  expect(caesarCipher('z Z')).toBe('a A')
})

test('single word', () => {
  expect(caesarCipher('hello')).toBe('ifmmp')
})

test('single uppercase word', () => {
  expect(caesarCipher('HELLO')).toBe('IFMMP')
})

test('multi word', () => {
  expect(caesarCipher('hello world')).toBe('ifmmp xpsme')
})
test('punctuation', () => {
  expect(caesarCipher('hello-world!')).toBe('ifmmp-xpsme!')
})