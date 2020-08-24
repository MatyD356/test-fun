const analysis = (arr) => {
  return arr.length > 0 ? {
    average: arr.reduce((a, b) => (a + b)) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  } : {}
}

export default analysis