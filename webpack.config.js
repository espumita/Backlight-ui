import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export default {
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'] },
    entry: [
        path.resolve(__dirname, 'src/index.tsx')
     ],
    output: { filename: 'bundle.js', publicPath: '/', path: path.resolve(__dirname, 'dist') },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
            { test: /\.(ts|tsx)$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]

}