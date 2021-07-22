const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.ts'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'swc-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.resolve(__dirname, '../index.html')
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },
}
