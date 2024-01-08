const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: 'assets/images/[name][ext]',
        clean: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // {
            //     test: /\.html$/i,
            //     use: 'html-loader'
            // },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                // generator: {
                //     filename: 'assets/images/[name]-[hash][text]'
                // }
            },
        ],
        
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    })]
};