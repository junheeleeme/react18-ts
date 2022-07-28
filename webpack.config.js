const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'
const envPath = `./.env.${isDev ? 'development' : 'production'}`

dotenv.config({
  path: envPath,
})

const config = {
  name: 'React18-webpack-setting',
  mode: isDev ? 'development' : 'production', // production, development
  devtool: !isDev ? 'hidden-source-map' : 'eval',
  entry: {
    app: './src/index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src/'),
      api: path.resolve(__dirname, './src/api/'),
      utils: path.resolve(__dirname, './src/utils/'),
      common: path.resolve(__dirname, './src/common/'),
      store: path.resolve(__dirname, './src/store/'),
      pages: path.resolve(__dirname, './src/pages/'),
      layout: path.resolve(__dirname, './src/layout/'),
    },
  },
  module: {
    rules: [
      {
        // 리액트 바벨 설정
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'image/[contenthash].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: envPath,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // 템플릿 설정
      title: process.env.TITLE, // 문서 타이틀
      minify: false, // 압축 설정
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new ESLintPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  devServer: {
    // 개발 서버 설정
    port: 3000,
    hot: true, // 핫 모듈 교체(HMR) 활성화
    compress: true,
    open: true,
    historyApiFallback: true,
  },
}

if (isDev && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = config
