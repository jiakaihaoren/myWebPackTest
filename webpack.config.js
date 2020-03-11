const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    // 默认打包src下的index.js入口
    mode:"development", // production development 
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader','postcss-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use:'url-loader?limit=1867730' //小于limit则用base64
            },
            // {
            //     test:/\.js$/,
            //     use:'babel-loader',
            //     exclude:/node_modules/
            // },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-react-jsx']
                    }
                },
                exclude:/node_modules/
            }
        ]
    }
}