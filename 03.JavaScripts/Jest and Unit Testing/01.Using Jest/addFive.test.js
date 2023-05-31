const {default: TestRunner} = require("jest-runner")
const addFive = require('./addFive')

test("returns the number plus 5", () => {
    expect(addFive(1)).toBe(6)
    expect(addFive("1")).toBe("15")

})
// after adding jest as test in package.json you need to run 'npm test' command