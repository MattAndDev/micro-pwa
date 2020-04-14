import * as yargs from 'yargs'
const args = yargs
  .option('hmr', {
    alias: 'h',
    type: 'string',
    default: '',
    description: 'Enables hmr',
  })
  .option('watch', {
    alias: 'w',
    type: 'string',
    default: '',
    description: 'Enables watch mode watching',
  })
  .option('devServer', {
    alias: 'd',
    type: 'string',
    default: '',
    description: 'Enables dev server',
  })
  .option('serverPort', {
    alias: 'p',
    type: 'string',
    default: '4242',
    description: 'Server port',
  })
  .option('bundleMode', {
    alias: 'b',
    type: 'string',
    default: 'production',
    description: "Set bundler mode: 'production' or 'debug'",
  })
  .option('nodeEnv', {
    alias: 'n',
    type: 'string',
    default: 'production',
    description: 'Sets NODE_ENV at build time!',
  })
  .option('outDir', {
    alias: 'o',
    type: 'string',
    default: './app',
    description: 'Sets output directory',
  }).argv

// assign to env
process.env.NODE_ENV = args.nodeEnv
process.env.SERVER_PORT = args.serverPort
process.env.HMR_ENABLED = args.hmr
process.env.DEV_SERVER = args.devServer
process.env.WATCH = args.watch
process.env.BUNDLE_MODE = args.bundleMode
process.env.OUT_DIR = args.outDir

require('@env')
require('./bundler')
