var path = require('path');
module.exports = {
  entry: {index:'./src/js/index.js'},
  output: {
    path: path.resolve(__dirname, 'build','js'),
//    path: 'build/js',    //打包文件存放的绝对路径。
    publicPath: "build/js",  //网站运行时的访问路径。
    filename: '[name].bundle.js'   //filename
  }
};
