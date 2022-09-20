const path = require('path');

module.exports = {
    name: "production_configuration", //имя конфигурации, отопражаемое в выводе
    mode: "production", //выбор режима говорит webpack применить встроенные возможности оптимизации
    entry: './src/app.jsx', //точка входа, откуда начинается сборка
    output: {
        //настройки результатов сборки
        path: path.resolve(__dirname, '../dist'), //директория в которую происходит сборка
        filename: "bundle.js", //назвние результирующего файла
        publicPath: "../dist/", //ссылка на директорию, которая будет считаться корневой для собранного файла
    },
    module: {
        //настройки модулей
        rules:[
            //правила для модулей 
            {
                test: /\.jsx?$/,
                exclude: [ 
                    //правило для исключения
                    path.resolve(__dirname,'node_modules')
                ],
                loader: "babel-loader", //загрузчик 
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
}