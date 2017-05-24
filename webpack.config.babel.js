import path from 'path'
import webpack from 'webpack'

export default {
  entry: [
    'react-hot-loader/patch',
    './src',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node-modules/ },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
    port: 8000,
    hot: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
