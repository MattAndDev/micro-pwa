import { h, FunctionalComponent } from 'preact'
import { CONFIG } from '@client/routes'
import { Example } from '@client/components/atoms'
import { route } from 'preact-router'

export const Home: FunctionalComponent = () => {
  const routeToPage = (): boolean =>
    route({ url: CONFIG.PAGE.path })
  return <Example onClick={routeToPage}>Go to page</Example>
}
