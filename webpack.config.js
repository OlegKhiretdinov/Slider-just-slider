const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    library: 'sliderJustSlider',
    libraryTarget: 'window',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'soudce-map',
  devServer: {
    port: 3000,
    stats: 'errors-only',
    contentBase: path.join(__dirname, './dist/')
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
}