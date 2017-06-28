const path = require('path');
module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test:/\.css$/, loader:'style-loader!css-loader'},
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg|ico)?$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    devServer: {
        compress: true,
        host: 'localhost',
        port: 5000,
        historyApiFallback: true,
    }
};