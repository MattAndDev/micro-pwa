import { h, FunctionalComponent } from 'preact'

import { routesConfig } from '@client/routes'
import { Example } from '@client/components/atoms'
import { route } from 'preact-router'

export const Home: FunctionalComponent = () => {
  const routeToPage = (): boolean => route({ url: routesConfig.PAGE.path })
  return (
    <main>
      <Example onClick={routeToPage}>Go to page</Example>
    </main>
  )
}
