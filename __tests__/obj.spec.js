import {hasJsonStructure} from '../'

describe('hasJsonStructure', () => {
  it('should return false for strings', () => {
    expect(hasJsonStructure('hello')).toBe(false)
    expect(hasJsonStructure(1)).toBe(false)
    expect(hasJsonStructure(false)).toBe(false)
    expect(hasJsonStructure(true)).toBe(false)
  })

  it('should return true for strings representing an object or array', () => {
    expect(hasJsonStructure('{"x":true}')).toBe(true)
    expect(hasJsonStructure('[{"x":true}, 2]')).toBe(true)

    const obj = {a: 1, b: 2, c: 3}
    expect(hasJsonStructure(JSON.stringify(obj))).toBe(true)
  })
})