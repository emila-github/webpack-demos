var path = require('path')
  , glob = require("glob")
  , webpack = require("webpack")
  , __DEV__ = process.env.NODE_ENV !== 'production'      //SET __DEV__=false
  , src_root = path.join(__dirname,'source')
  , dist_root = 'build';

console.log('=======',__DEV__);
module.exports = glob.sync(path.join(src_root, './**/*.entry.js'))
  .map(function(entryPath) {

    var entryName = path.basename(entryPath, '.entry.js')
      , relativeEntryPath = path.relative(src_root, entryPath)
      , outputPath = path.join(__DEV__ ? src_root : dist_root, relativeEntryPath, '../')
//      , outputPath = path.join(dist_root, relativeEntryPath, '../')
      , publicPath = dist_root+'/js'    //网站运行时的访问路径。
    console.log('entryPath=', entryPath, entryName);
    console.log('relativeEntryPath=', relativeEntryPath);
    console.log('outputPath=', outputPath,__DEV__);
    console.log('publicPath=', publicPath);
    return {
      entry: {[entryName]: entryPath}
      , resolve: {
        root: path.join(src_root, './js')
      }
      , output: {
          publicPath: publicPath  //网站运行时的访问路径。
          , path: outputPath   //打包文件存放的绝对路径。
          , filename: '[name].bundle.js'
      }
      , module: {
        loaders: [
          {test: /\.handlebars$/, loader: "handlebars-loader" }
          , { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
      }

    }
})
