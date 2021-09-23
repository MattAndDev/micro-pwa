import { h, FunctionalComponent } from 'preact'
import { routesConfig } from '@client/routes'
import { Example } from '@client/components/atoms'
import { route } from 'preact-router'

export const Page: FunctionalComponent = () => {
  const routeToHome = (): boolean => route({ url: routesConfig.HOME.path })
  return <Example onClick={routeToHome}>Go home</Example>
}
