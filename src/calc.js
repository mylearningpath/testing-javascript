module.exports = {
  sum: function (num1, num2) {
    return num1 + num2
  },
  sub: function (num1, num2) {
    return num1 - num2
  },
  mult: function (num1, num2) {
    return num1 * num2
  },
  div: function (num1, num2) {
    return num2 === 0 ? 'Can\'t divide by 0' : num1 / num2
  }
}