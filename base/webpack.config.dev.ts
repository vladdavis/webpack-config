import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const workdir = process.cwd();

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(workdir, 'src/index.tsx'),
    output: {
        path: path.resolve(workdir, 'dist'),
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: {
            index: '/',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({ title: '' }),
    ],
};

export default config;
