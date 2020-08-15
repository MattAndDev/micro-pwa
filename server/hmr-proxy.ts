import { Application } from 'express'
import proxy from 'express-http-proxy'

export const hmrProxy = (app: Application): void => {
  app.use(
    '*.(map|js|json)',
    proxy('http://localhost:4141', {
      proxyReqPathResolver: function(req) {
        return req.originalUrl
      }
    })
  )
  app.get(/\.css$/, (req, res) => {
    res.setHeader('Content-type', 'text/css')
    return res.send('')
  })
}
