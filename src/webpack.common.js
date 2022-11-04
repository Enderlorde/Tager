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
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext]'
                }
            },
            {
                test: /\.svg$/,
                use: [{
                        loader: '@svgr/webpack',
                        options: {
                            icon: true
                        }                   
                    }]
            },
            {
                test: /\.ttf$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext]'
                }
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/static/index.html'
    })],
}