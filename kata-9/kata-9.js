function deleteDoubles(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log(deleteDoubles([1, 2, 4, 4, 3, 3, 1, 5, 3, 3]))

module.exports = deleteDoubles
