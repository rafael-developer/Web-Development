const modoDev = process.env.NOVE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development' : 'production', // desenvolvimento ou production
    entry: './src/principal.js', // arquivo de entrada
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' // default cria diretorio dist/main.js
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, //expressão regular Regex
            use: [
                MiniCssExtractPlugin.loader, // extrai arquivo css para arquivo .css
                //'style-loader', //Adiciona CSS ao DOM injetando a tag <style>
                'css-loader',    //interpreta @import, url()...
                'sass-loader',
            ]
        }]
    }
}