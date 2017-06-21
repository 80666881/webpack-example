//导入Node.js的path模块,主要用来转换成绝对路径,比如path.resolve(__dirname, 'build')
const path = require('path'),
	webpack = require('webpack'),
	// ExtractTextPlugin = require('extract-text-webpack-plugin');////导入ExtractTextPlugin插件,作用提取代码中的css生成独立的CSS文件
 base = {
	index:'./src/js/app/index.js'
}
module.exports = {
	entry:base,
	output: {
	  	path: path.resolve(__dirname, 'dist'),
	    filename: 'bundle.js'
  	},
  	resolve:{
	  	  alias:{
	  	      'jquery':path.resolve(__dirname,'./src/js/lib/jquery-3.2.1.min.js'),
	  	      'ajax-append':path.resolve(__dirname,'src/js/com/ajax-append.js'),
	  	      'carousel':path.resolve(__dirname,'src/js/com/carousel.js'),
	  	      'gotop':path.resolve(__dirname,'src/js/com/gotop.js'),
	  	      'waterfall':path.resolve(__dirname,'./src/js/com/waterfall.js')
	  	  }
  	}
}