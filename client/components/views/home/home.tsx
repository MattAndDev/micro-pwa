import { h, FunctionalComponent } from 'preact'
import { CONFIG } from '../../../routes'
import { Example } from '../../atoms/example'

export const Home: FunctionalComponent = () => (
  <div>
    <a href={CONFIG.PAGE.path}>Go to page</a>
  </div>
)
