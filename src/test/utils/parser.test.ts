import { parser } from '../../core/utils/parser'

describe('parserObjectPaths', () => {
  it('NullObj with name', () => {
    const result = parser({}, '/root')
    expect(result).toEqual([])
  })

  it('Obj with name', () => {
    const result = parser({ api: 'saber' }, '/root')
    expect(result).toEqual([{ key: '/root/api', value: 'saber' }])
  })

  it('deepObj with name', () => {
    const result = parser(
      {
        api: {
          user: 'saber'
        },
        com: 'nana'
      },
      '/root'
    )
    expect(result).toEqual([
      { key: '/root/com', value: 'nana' },
      { key: '/root/api/user', value: 'saber' }
    ])
  })

  it('NullObj', () => {
    const result = parser({})
    expect(result).toEqual([])
  })

  it('simpleObj', () => {
    const result = parser({ api: 'saber' })
    expect(result).toEqual([{ key: '/api', value: 'saber' }])
  })

  it('simpleObj2', () => {
    const result = parser({ api: 'saber', com: 'nana' })
    expect(result).toEqual([
      { key: '/api', value: 'saber' },
      { key: '/com', value: 'nana' }
    ])
  })

  it('deepObj', () => {
    const result = parser({
      api: {
        user: 'saber'
      },
      com: 'nana'
    })
    expect(result).toEqual([
      { key: '/com', value: 'nana' },
      { key: '/api/user', value: 'saber' }
    ])
  })

  it('Array in deepObj', () => {
    const result = parser({
      api: {
        user: ['saber', 'nanasaki']
      },
      com: 'nana'
    })
    expect(result).toEqual([
      { key: '/com', value: 'nana' },
      { key: '/api/user', value: ['saber', 'nanasaki'] }
    ])
  })
})
