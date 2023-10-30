import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = { // аналог экспорта
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: { // куда и как будет собираться приложение
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [ // обработка файлов, которые выходят за рамки js
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: { // указываем расширения импортов чтобы не писать их при импорте
        extensions: ['.tsx', '.ts', '.js'],
    }
}

export default config;

/*
       production - готовое по, development - в разработке
       __dirname - текущ директория, src и index путь
       // [name] - название entry, которое мы указали выше, [contenthash] - для того чтобы решить проблему хэширования
       clean - очистка лишних выходных файлов
*/