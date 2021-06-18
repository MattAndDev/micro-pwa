import { h, FunctionalComponent } from 'preact'
import Router, { RouterProps } from 'preact-router'
import { CONFIG, ROUTE_ID } from './routes'
import './styles/variables.css'

export const App: FunctionalComponent<RouterProps> = (props: RouterProps) => (
  <Router {...props}>
    {Object.values(ROUTE_ID).map((key: ROUTE_ID) => {
      const Comp = CONFIG[key].component
      return <Comp key={key} path={CONFIG[key].path} />
    })}
  </Router>
)
