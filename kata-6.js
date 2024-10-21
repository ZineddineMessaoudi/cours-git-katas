function isPalindrone(str) {
  return str.split("").reverse().join("") === str
}

console.log(isPalindrone("radar"))
