const path = require('path');
const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');

module.exports = merge(common,{
    name: "dev", //имя конфигурации, отопражаемое в выводе
    mode: "development", //выбор режима говорит webpack применить встроенные возможности оптимизации
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, '../dist'),
        historyApiFallback: true,
        hot: true
    }
});