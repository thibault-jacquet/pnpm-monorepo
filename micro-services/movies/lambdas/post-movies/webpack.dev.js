const path = require('path')
const nodeExternals = require('webpack-node-externals')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

// TODO Uglify / Minify

module.exports = {
  entry: {
    main: path.resolve(__dirname, './lib/index.js')
  },
  watch: true,
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'development',
  target: 'node',
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: [nodeExternals(), { 'aws-sdk': 'aws-sdk' }]
}
