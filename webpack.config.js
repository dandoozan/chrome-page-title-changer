const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
      amazon: './src/js/execScript_amazon.js',
      amazonResult: './src/js/execScript_amazonResult.js',
  },
  plugins: [
      new CleanWebpackPlugin(['dist']),
      new CopyWebpackPlugin([
          './src/manifest.json',
          './src/images',
          './src/popup.html',
      ])
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist') //<-- path.resolve is necessary to get the absolute path
  }
};
