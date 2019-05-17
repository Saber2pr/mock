/*
 * @Author: saber2pr 
 * @Date: 2019-05-17 21:13:02 
 * @Last Modified by:   saber2pr 
 * @Last Modified time: 2019-05-17 21:13:02 
 */
export const isObject = (obj: any) =>
  Object.prototype.toString.call(obj) === '[object Object]'
