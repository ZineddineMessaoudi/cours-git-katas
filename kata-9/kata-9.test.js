const deleteDoubles = require("./kata-9.js")

test("deleteDoubles", () => {
  expect(deleteDoubles([1, 2, 4, 4, 3, 3, 1, 5, 3, 3])).tobe([1, 2, 4, 3, 5])
})
