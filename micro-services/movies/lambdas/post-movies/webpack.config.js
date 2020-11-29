const path = require('path')
const nodeExternals = require('webpack-node-externals')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

// TODO Uglify / Minify

module.exports = {
  entry: {
    main: path.resolve(__dirname, './lib/index.js')
  },
  // devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'production',
  target: 'node',
  // module: {
  //     rules: [
  //       {
  //         test: /\.tsx?$/,
  //         exclude: /node_modules/,
  //         use: [
  //           {
  //            loader: 'ts-loader',
  //            options: {
  //               configFile: 'tsconfig.json',
  //               projectReferences: true
  //            }
  //           }
  //         ],
  //       }
  //     ]
  // },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: [{ 'aws-sdk': 'aws-sdk' }]
}
