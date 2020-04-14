import { resolve } from 'path'
import * as merge from 'webpack-merge'
import baseConf from './server.base'

import { Configuration } from 'webpack'

const conf: Configuration = {
  mode: 'production'
}

export default merge(baseConf, conf)
