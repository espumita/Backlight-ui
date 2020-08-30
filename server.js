import browserSync from 'browser-sync'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from './webpack.config'

const bundler = webpack({mode: 'development', ...config})

browserSync({
  port: 3000,
  ui: { port: 3001 },
  server: {
    baseDir: 'src',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        noInfo: false,
        quiet: false,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        }
      })
    ]
  },
  files: [ 'src/*.html' ]
})