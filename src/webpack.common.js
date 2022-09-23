const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name: "production_configuration", //имя конфигурации, отопражаемое в выводе
    mode: "production", //выбор режима говорит webpack применить встроенные возможности оптимизации
    entry: './src/app.jsx', //точка входа, откуда начинается сборка
    output: {
        //настройки результатов сборки
        clean: true, //очистка /dist/ перед очередной сборкой
        path: path.resolve(__dirname, '../dist'), //директория в которую происходит сборка
        filename: "bundle.js", //назвние результирующего файла
        publicPath: "/", //ссылка на директорию, которая будет считаться корневой для собранного файла
    },
    module: {
        //настройки модулей
        rules:[
            //правила для модулей 
            {
                //обработка файлов jsx
                test: /\.jsx?$/,
                loader: "babel-loader", //загрузчик в транскомпилятор
                options: {
                    //пресет транскомпилятора для react 
                    presets: ['@babel/preset-react'] 
                }
            },
            {
                //обработка файлов sass
                test: /\.sass$/,
                use: [
                    //создаем узлы стилей из js
                    'style-loader',
                    //превращаем css в js
                    'css-loader',
                    //компилируем sass в css
                    'sass-loader'
                ]
            },
            {
                test: /\.png$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'images'
                }
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.ttf$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'fonts',
                }
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/static/index.html'
    })],
}