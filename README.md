# https://www.youtube.com/watch?v=yJrcib6ZITw

## Getting Started with Create React App

## npm init
create `src` and `public` Folders
=>src
    `index.js`
    `App.js`
=>public
    `index.html`

## https://webpack.js.org/concepts/
=>CRAEATE REACT APPLICATION 
## npm install react react-dom
=>CREATE WEBPACK  CONFIG  FROM SCRATCH  npm i webpack webpack-cli
## npm install webpack webpack-cli
=>ENTRY , OUTPUT 
## webpack.development.config.js 
=>RESOLVE JSX
## https://webpack.js.org/configuration/resolve/#root  (type extension and alias)
 resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      @: path.resolve(__dirname, 'src'),
    }
  },
   
=>LOADERS
    -BABEL LOADER 
## npm install -D babel-loader @babel/core @babel/preset-env --save-dev
## npm i @babel/preset-react --save-dev
    -STYLE LOADER
## npm install style-loader --save-dev
    -CSS LOADER
## npm install css-loader --save-dev
    -LOAD IMAGES
  {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    },
=>WEB PACK DEV SERVER
## npm install webpack-dev-server --save-dev

server.js
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.development.config.js');

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
    console.log('Starting server...');
    await server.start();
};

runServer();

## node server.js

=>PLUGINS
    -HtmlWebpackPlugin 
## npm install -HtmlWebpackPlugin --save-dev

const HtmlWebpackPlugin = require('html-webpack-plugin');

 plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        path: 'index.html'
    })],

    -Terser Plugin
## npm install terser-webpack-plugin --save-dev
-is used to removed the unneccesary code in production build
const TerserPlugin = require("terser-webpack-plugin");

 optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },


    -Mini Css extract Plugin
## npm install --save-dev mini-css-extract-plugin
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
     plugins: [new MiniCssExtractPlugin()],
      rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],


    -Define Plugin

## npx serve dist
## devtool:'source-map'

new webpack.DefinePlugin({
        API_URL: JSON.stringify('http://api/prod/v2/graphql'),
    })


=>OPTIMIZATION- SPLIT CHUNKS

  splitChunks: {
            chunkIds: "named",
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    name: 'vendor',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        }




go throw below: https://github.com/PardeepBhasin/webpack-yt-session/blob/main/webpack.production.config.js
=>SEPERATE CHUNK FOR  SHARED  MODULE
=>DYNAMIC REPORTS
=>PERFOMANCE

