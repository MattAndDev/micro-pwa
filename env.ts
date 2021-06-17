type EnvKey =
  | 'NODE_ENV'
  | 'BUNDLE_MODE'
  | 'SERVER_PORT'
  | 'BODY_ASSETS'
  | 'HMR_ENABLED'
  | 'OUT_DIR'
  | 'WATCH'
  | 'DEV_SERVER'

type Env = {
  NODE_ENV: 'development' | 'production'
  BUNDLE_MODE: 'debug' | 'production'
  SERVER_PORT: string
  BODY_ASSETS: string
  HMR_ENABLED: string | undefined
  DEV_SERVER: string | undefined
  WATCH: string | undefined
  OUT_DIR: string
}

const env: Env = {
  NODE_ENV: (process.env.NODE_ENV as Env['NODE_ENV']) || 'production',
  SERVER_PORT: process.env.SERVER_PORT as string,
  HMR_ENABLED: process.env.HMR_ENABLED,
  DEV_SERVER: process.env.DEV_SERVER,
  WATCH: process.env.WATCH,
  BUNDLE_MODE: process.env.BUNDLE_MODE as Env['BUNDLE_MODE'],
  BODY_ASSETS: process.env.BODY_ASSETS || '',
  OUT_DIR: process.env.OUT_DIR || './app'
}

export default env
