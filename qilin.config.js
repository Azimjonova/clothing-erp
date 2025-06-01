module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  template: './src/index.html',
  devServer: {
    port: 3000,
    open: true
  }
};
