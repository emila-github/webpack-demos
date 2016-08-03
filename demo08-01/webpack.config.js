var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//������һЩ�ļ��е�·��
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //��Ŀ���ļ��� ����ֱ�����ļ������� Ĭ�ϻ���index.js Ҳ����ȷ�����ĸ��ļ�����
  entry: APP_PATH,
  //������ļ��� �ϲ��Ժ��js������Ϊbundle.js
  output: {
    path: BUILD_PATH,
    filename: '[name].bundle.js'
  },
  //������ǵĲ�� ���Զ�����һ��html�ļ�
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ]
};