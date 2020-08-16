import merge from 'webpack-merge'
import { resolve } from 'path'
import baseConf from './base'
import * as webpack from 'webpack'
import { InjectManifest } from 'workbox-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import env from '@env'
const hotMiddlewareScript = `webpack-hot-middleware/client?path=http://localhost:4141/__webpack_hmr`

const conf: webpack.Configuration = {
  context: resolve(process.cwd(), 'client'),
  entry: {
    'app.js': env.HMR_ENABLED
      ? ['./entry.tsx', hotMiddlewareScript]
      : './entry.tsx',
    'sw.js': './sw.ts',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: './static',
        to: './static/',
      }],
    }),
    new InjectManifest({
      swSrc: './sw.ts',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dontCacheBustURLsMatching: /\*hot-update.json$/,
    }), 
    new webpack.HotModuleReplacementPlugin({
        requestTImeout: 100000
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'js/lib.js',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  output: {
    filename: 'js/[name]',
    chunkFilename: '[name]',
    path: resolve(`./${env.OUT_DIR}/client`),
    publicPath: '/',
  },
}

export default merge(baseConf, conf)
