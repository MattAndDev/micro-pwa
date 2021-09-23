export type Route = {
  path: string
  head: {
    title: string
  }
}

export enum RouteId {
  HOME = 'HOME',
  PAGE = 'PAGE'
}

type RoutesConfig = {
  [key in RouteId]: Route
}

const HOME: Route = {
  path: '/',
  head: {
    title: 'Home'
  }
}

const PAGE: Route = {
  path: '/page/',
  head: {
    title: 'Page'
  }
}

export const routesConfig: RoutesConfig = { PAGE, HOME }
