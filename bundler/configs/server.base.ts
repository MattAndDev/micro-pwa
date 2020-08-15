import { resolve } from 'path'
import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import baseConf from './base'
import env from '@env'

const conf: Configuration = {
  target: 'node',
  context: resolve(process.cwd(), 'server'),
  entry: {
    'index.js': './index.ts',
  },
  output: {
    filename: 'js/[name]',
    chunkFilename: '[name]',
    path: resolve(`./${env.OUT_DIR}/server`),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'js/lib.js',
          test: /node_modules/,
          enforce: true,
        },
      },
    },
  },
}

export default merge(baseConf, conf)
