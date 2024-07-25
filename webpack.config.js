const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.yaml$/,
                use: 'yaml-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ],
    devServer: {
        port: 9000,
        historyApiFallback: true,
    }
}