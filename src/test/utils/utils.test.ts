import { isObject } from '../../core/utils/utils'

describe('utils', () => {
  it('isObject Object', () => {
    const result = isObject({})
    expect(result).toEqual(true)
  })

  it('isObject String', () => {
    const result = isObject('')
    expect(result).toEqual(false)
  })

  it('isObject Number', () => {
    const result = isObject(233)
    expect(result).toEqual(false)
  })

  it('isObject Array', () => {
    const result = isObject([])
    expect(result).toEqual(false)
  })

  it('isObject Boolean', () => {
    const result = isObject(true)
    expect(result).toEqual(false)
  })

  it('isObject Symbol', () => {
    const result = isObject(Symbol())
    expect(result).toEqual(false)
  })
})
