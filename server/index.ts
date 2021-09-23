import { resolve } from 'path'
import express from 'express'
import { renderView } from './renderer'
import env from '@env'
import compression from 'compression'
import { routesConfig } from '@client/routes'

const app = express()
app.use(compression())

// mount static
app.use(express.static(resolve(env.OUT_DIR, 'client')))

// router routes
const routes = Object.values(routesConfig)
routes.forEach(({ path }) => {
  app.get(path, async (req, res) => {
    const view = await renderView(req)
    return res.send(view)
  })
})

// inspection routes
// eslint-disable-next-line no-console
app.listen(env.SERVER_PORT, () =>
  console.log(`Ssr server started on port: ${env.SERVER_PORT}!`)
)
