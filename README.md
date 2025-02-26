# Getting Started with Create React App

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
    -Mini Css extract Plugin
    -Define Plugin

=>OPTIMIZATION- SPLIT CHUNKS
=>SEPERATE CHUNK FOR  SHARED  MODULE
=>DYNAMIC REPORTS
=>PERFOMANCE

