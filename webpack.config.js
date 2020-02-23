const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [ // 插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //css模块化  尽量不要在css中配置模块化
            //建议在scss或less中配置，webpack配置后要重启
            { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[name]_[local]-[hash:5]', 'sass-loader' ]},
            { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000' },
            { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ }
            //校验jsx
        ]
    }
}