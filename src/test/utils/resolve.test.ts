import { resolve } from '../../core/utils/resolve'

describe('resolveKey', () => {
  it('key /', () => {
    const result = resolve('/')
    expect(result).toEqual('/')
  })

  it('key //', () => {
    const result = resolve('//')
    expect(result).toEqual('/')
  })

  it('key //aa', () => {
    const result = resolve('//aa')
    expect(result).toEqual('//aa')
  })

  it('key /aa', () => {
    const result = resolve('/aa')
    expect(result).toEqual('/aa')
  })
})
