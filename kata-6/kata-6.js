function isPalindrone(str) {
  return str.split("").reverse().join("") === str
}

module.exports = isPalindrone
