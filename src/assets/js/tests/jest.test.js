////////////////////////////////////////////////////////////////////////////////
// JEST: Javascript Testing Platform
// https://facebook.github.io/jest/
////////////////////////////////////////////////////////////////////////////////

// MATCHERS ////////////////////////////////////////////////////////////////////
// https://facebook.github.io/jest/docs/en/using-matchers.html

// Use toBe() to test an exact value
test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

// EQUALITY ////////////////////////////////////////////////////////////////////
test('different arrays are not equal', () => {
  expect([1, 2, 3]).not.toBe([3, 2, 1])
})

test('different objects are not equal', () => {
  expect({ o: 1, t: 2 }).not.toBe({ o: 2, t: 3 })
})

// Use toEqual() to test individual values in an array and return a diff
test('object assignment', () => {
  const data = { one: 1 }
  data.two = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

// TRUTHINESS //////////////////////////////////////////////////////////////////
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Note you can have multiple 'assertions' in a test
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

// COMPARISON //////////////////////////////////////////////////////////////////
test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

// Floats and rounding errors
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3) //This won't work because of rounding error
  expect(value).toBeCloseTo(0.3) // This works.
})

// STRINGS & REGEX /////////////////////////////////////////////////////////////
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})
