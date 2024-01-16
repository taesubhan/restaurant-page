const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: 'images/[name][ext]',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]-[hash][ext]'
                }
            },
        ],
        
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    })]
};