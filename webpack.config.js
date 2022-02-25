const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        goods: './src/goods.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map'
}