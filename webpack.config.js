const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = (env, argv) => {
    const publicPath = argv.mode === 'production' ? './' : '/'
    return {
        resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'] },
        entry: [
            path.resolve(__dirname, 'src/index.tsx')
        ],
        output: { filename: 'backlight-ui-bundle.js', publicPath, path: path.resolve(__dirname, 'dist') },
        module: {
            rules: [
                { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
                { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
                { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
                { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader' }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                filename: "./index.html",
                favicon: "./public/favicon.ico"
            })
        ]
    }
}