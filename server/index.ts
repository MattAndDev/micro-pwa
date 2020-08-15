import { resolve } from 'path'
import express from 'express'
import { renderView } from './renderer'
import { hmrProxy } from './hmr-proxy'
import env from '@env'

const app = express()

// mount hmr proxy server
if (env.HMR_ENABLED) hmrProxy(app)

// mount static
app.use(express.static(resolve('./', env.OUT_DIR || 'app', 'client')))

// all the rest
app.get('*', (req, res) => {
  return res.send(renderView(req))
})

// eslint-disable-next-line no-console
app.listen(env.SERVER_PORT, () =>
  console.log(`Ssr server started on port: ${env.SERVER_PORT}!`)
)
