import { h, FunctionalComponent, Fragment } from 'preact'
import Router, { RouterProps } from 'preact-router'
import { CONFIG, ROUTE_ID } from './routes'

export const Head: FunctionalComponent<RouterProps> = (props) => (
  <Fragment>
    <Router {...props}>
      {Object.values(ROUTE_ID).map((key: ROUTE_ID) => (
        <Fragment key={ROUTE_ID} path={CONFIG[key].path}>
          <title>{CONFIG[key].seo.title}</title>
        </Fragment>
      ))}
    </Router>
    <link rel="manifest" href="/static/manifest.json" />
  </Fragment>
)
