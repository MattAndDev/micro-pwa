import { h, FunctionalComponent } from 'preact'
import { CONFIG } from '../../../routes'

export const Page: FunctionalComponent = () => (
  <a href={CONFIG.HOME.path}>Go back</a>
)
