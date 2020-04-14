import { Home, Page } from './components/views'
import { h, FunctionalComponent } from 'preact'

type ROUTE = {
  path: string
  component: FunctionalComponent
  seo: {
    title: string
  }
}

export enum ROUTE_ID {
  HOME = 'HOME',
  PAGE = 'PAGE'
}

type ROUTES_CONFIG = {
  [key in ROUTE_ID]: ROUTE
}

const HOME: ROUTE = {
  path: '/',
  component: Home,
  seo: {
    title: 'Home'
  }
}

const PAGE: ROUTE = {
  path: '/page/',
  component: Page,
  seo: {
    title: 'Page'
  }
}

export const CONFIG: ROUTES_CONFIG = { PAGE, HOME }
