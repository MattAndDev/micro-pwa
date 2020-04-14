import { h, hydrate, render } from 'preact'
import { App } from './app'
import { Head } from './head'
import env from '@env'

const renderFunc = env.HMR_ENABLED === 'true' ? render : hydrate

renderFunc(<App />, document.body)
renderFunc(<Head />, document.head)
// Set up HMR re-rendering.
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept()
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
  })
}
