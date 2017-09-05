let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let OpenBrowserPlugin = require("open-browser-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH,"./");
const BUILD_PATH = path.resolve(ROOT_PATH,"build");

module.exports = {
    entry:{
        "app":path.resolve(APP_PATH,"./app/index.jsx")
    },
    output:{
        path:BUILD_PATH,
        filename:"bundle.js"

    },
    devtool: 'source-map',//开发者工具,它的作用是生成源码映射,方便调试;
    module:{
        loaders:[
            {
                test:/\.js[x]?$/,
                exclude:/node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            
            {
                test:/\.css$/,
                loader:'style-loader!css-loader?modules'
            },
            {
                test:/\.less$/,
                loaders:["style-loader","css-loader","less-loader"]
             },
            {
                test:/\.(png|jpg|gif|bmp|jpeg)$/i,
                loader:"url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]"
            },
            { 
                test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i, 
                loader:'url-loader?limit=5000'}
        ]
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias:{},
        extensions: ['*','.js','.jsx']
     },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            title: 'MyReactRedux',
            template:'./app/index.html'
        }),
        new OpenBrowserPlugin({
            url : "http://localhost:8888"
        })
    ]
}