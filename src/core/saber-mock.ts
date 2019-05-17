/*
 * @Author: saber2pr
 * @Date: 2019-05-17 21:57:25
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-17 22:59:04
 */
import { FS, Terminal } from '@saber2pr/node'
import { parser } from './utils/parser'
import { Koa, Job } from '@saber2pr/koa'
import { route } from '@saber2pr/koa-router'
import { resolve } from './utils/resolve'

const PATH_CONFIG = `${process.cwd()}/mock.json`
let port = 2333

const argv = Terminal.getParams()
if (argv[0]) port = Number(argv[0])

export async function Mock() {
  const buffer = await FS.readFile(PATH_CONFIG)
  const api = JSON.parse(buffer.toString())

  const Routes = parser(api)
  const jobs = Routes.map<Job>(({ key, value }) =>
    route(resolve(key))(async ctx => ctx.response.end(JSON.stringify(value)))
  )

  Koa()
    .use(...jobs)
    .listen(port, () => console.log(`http://localhost:${port}`))
}
