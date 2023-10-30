import webpack from 'webpack'
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev
})

export default config;

/*
       production - готовое по, development - в разработке
       __dirname - текущ директория, src и index путь
       // [name] - название entry, которое мы указали выше, [contenthash] - для того чтобы решить проблему хэширования
       clean - очистка лишних выходных файлов
*/