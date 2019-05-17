/*
 * @Author: saber2pr
 * @Date: 2019-05-17 21:13:12
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-17 21:14:03
 */
import { isObject } from './utils'

export type Node = {
  key: string
  value: any
}

export function parser(tree: any, name: string = '') {
  const result: Node[] = []
  const stack: Node[] = [{ key: name, value: tree }]

  while (stack.length) {
    const node = stack.shift()
    if (isObject(node.value)) {
      Object.entries(node.value).forEach(([key, value]) =>
        stack.push({ key: `${node.key}/${key}`, value })
      )
    } else {
      result.push(node)
    }

    if (stack.length > 1000) throw new Error('StackOverFlow')
  }
  return result
}
