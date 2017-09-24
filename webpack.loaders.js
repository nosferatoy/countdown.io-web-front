module.exports = [
  {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    loaders: ['style-loader', 'css-loader?importLoaders=1'],
  }
];