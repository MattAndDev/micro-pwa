import * as merge from 'webpack-merge'
import baseConf from './client.base'
import * as webpack from 'webpack'

const conf: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
}

export default merge(baseConf, conf)
