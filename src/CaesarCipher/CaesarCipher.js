const caesarCipher = (str) => {
  return str.split('')
    .map((item) => String.fromCharCode(
      item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91 ?
        item.charCodeAt(0) + 1 >= 91 ? item.charCodeAt(0) - 25 : item.charCodeAt(0) + 1 :
        item.charCodeAt(0) > 96 && item.charCodeAt(0) < 123 ?
          item.charCodeAt(0) + 1 >= 123 ? item.charCodeAt(0) - 25 : item.charCodeAt(0) + 1 :
          item.charCodeAt(0)))
    .join('')
}
export default caesarCipher