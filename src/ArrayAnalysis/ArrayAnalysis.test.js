import analyze from './ArrayAnalysis'

test('should handle empty arr', () => {
  expect(analyze([])).toStrictEqual({})
})

test('should calculate average', () => {
  expect(analyze([2, 5, 2]).average).toStrictEqual(3)
})
test('should calculate min value', () => {
  expect(analyze([1, 2, 4, 6]).min).toStrictEqual(1)
})

test('should calculate max value', () => {
  expect(analyze([1, 2, 4, 6]).max).toStrictEqual(6)
})

test('should calculate arr length', () => {
  expect(analyze([1, 2, 4, 6]).length).toStrictEqual(4)
})

test('should handle longer array', () => {
  expect(analyze([1, 2, 2, 4, 6, 8, 12])).toStrictEqual({
    average: 5,
    min: 1,
    max: 12,
    length: 7,
  })
})