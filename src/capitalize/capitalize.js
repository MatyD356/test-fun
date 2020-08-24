const capitalize = (str) => {
  return str.split('')
    .map((item, index) => index === 0 ? item.toUpperCase() : item.toLowerCase())
    .join('')
}
export default capitalize