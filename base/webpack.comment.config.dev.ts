import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// process.cwd returns a directory path where you run the application
// __dirname returns a directory path where the current file stored
// process.cwd is recommended for using in case of splitting or moving webpack configuration
const workdir = process.cwd();

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(workdir, 'src/index.tsx'),
    output: {
        path: path.resolve(workdir, 'dist'),
        // publicPath is the address to your build on the server
        publicPath: '/',
    },
    devServer: {
        // redirect to index.html in case of 404
        historyApiFallback: {
            index: '/',
        },
    },
    module: {
        rules: [
            {
                // loader for .ts and .tsx
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                // loader for images, import link as a module will return a link of images
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                exclude: /node_modules/,
            },
            {
                // loader for .css
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // when you use imports without extensions at the end, by default webpack tries to find [.js, .json]
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        // when you run a server for an application you need to create index.html for accessing it through http
        // HtmlWebpackPlugin creates base index.html with scripts src = your bundle
        new HtmlWebpackPlugin({ title: '' }),
    ],
};

export default config;
