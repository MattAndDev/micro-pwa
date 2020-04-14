import { h } from 'preact'
import { template } from './template'
import { Head } from '../client/head'
import { App } from '../client/app'
import { render } from 'preact-render-to-string'
import { JssProvider, SheetsRegistry, createGenerateId } from 'react-jss'
import { Request } from 'express'

export const renderView = (req: Request): string => {
  const sheets = new SheetsRegistry()
  const generateId = createGenerateId()
  const head = render(<Head url={req.url} />, { pretty: true })
  const body = render(
    <JssProvider registry={sheets} generateId={generateId}>
      <App url={req.url} />
    </JssProvider>,
    { pretty: true }
  )
  const style = `<style type="text/css">${sheets.toString()}</style>`
  return template(head + style, body)
}
