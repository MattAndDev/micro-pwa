type EnvKey =
  | 'NODE_ENV'
  | 'BUNDLE_MODE'
  | 'SERVER_PORT'
  | 'BODY_ASSETS'
  | 'HMR_ENABLED'
  | 'OUT_DIR'
  | 'WATCH'
  | 'DEV_SERVER'

type Env = Record<EnvKey, string | undefined>

const env: Env = {
  // passed on via arguments
  NODE_ENV: process.env.NODE_ENV,
  SERVER_PORT: process.env.SERVER_PORT,
  HMR_ENABLED: process.env.HMR_ENABLED,
  DEV_SERVER: process.env.DEV_SERVER,
  WATCH: process.env.WATCH,
  // webpack related
  BUNDLE_MODE: process.env.BUNDLE_MODE,
  BODY_ASSETS: process.env.BODY_ASSETS,
  OUT_DIR: process.env.OUT_DIR
}

export default env
