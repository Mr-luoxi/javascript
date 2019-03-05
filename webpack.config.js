const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
		mode: 'development',
		entry: './src/index1.js', //入口文件

		output: {	
			filename: 'bundle.js',  //指定js文件
			path: path.join(__dirname, 'dist')
		},

		module: {
			rules: [{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader'
					]
				}, {
					test: /\.(png|svg|jpg|gif)$/,
					use: [
						'file-loader'
					]
				}, {
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: [
						'file-loader'
					]
				},        
				 {
					test:/\.less$/,
					use:[
						'style-loader',
						'css-loader',
						'autoprefixer-loader',
						'less-loader'
					]
				},{
					test: /\.(csv|tsv)$/,
					use: [
						'csv-loader'
					]
				},
				{
					test:/\.vue$/,
					use: [
						'vue-loader'
					]
				}
				 ,{
					test: /\.xml$/,
					use: [
						'xml-loader'
						]
					},{
						// 处理es6的js
						test:/\.js$/,
						exclude: /(node_modules|bower_components)/,
						use:{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env'], //相当于preset:es-2015
								plugins: ['@babel/transform-runtime'] //减少时间
							}
						}
					}
				]
			},
			plugins:[
				// 插件的执行顺序是依次执行的
				new ExtractTextPlugin("styles.css"),
				new htmlWebpackPlugin({
					template:'./src/index.html',
				}),
				new VueLoaderPlugin(),   
			
			]
};