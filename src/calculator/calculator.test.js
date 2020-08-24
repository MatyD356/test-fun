import calculator from './calculator'

test('add intigers', () => {
  expect(calculator.add(1, 1)).toBe(2)
})

test('add floats', () => {
  expect(calculator.add(1.2, 1.3)).toBe(2.5)
})

test('subtract intigers', () => {
  expect(calculator.subtract(3, 1)).toBe(2)
})

test('subtract floats', () => {
  expect(calculator.subtract(3.5, 1.5)).toBe(2)
})

test('divide intigers', () => {
  expect(calculator.divide(4, 2)).toBe(2)
})

test('divide floats', () => {
  expect(calculator.divide(4.4, 2.2)).toBe(2)
})

test('multiply initgers', () => {
  expect(calculator.multiply(4, 2)).toBe(8)
})

test('multiply floats', () => {
  expect(calculator.multiply(4.5, 2.5)).toBe(11.25)
})