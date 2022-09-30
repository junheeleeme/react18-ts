const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'
const envPath = `./.env.${isDev ? 'development' : 'production'}`

dotenv.config({
  path: envPath,
})

console.log(process.env.TITLE)

const config = {
  name: 'React18-webpack-setting',
  mode: isDev ? 'development' : 'production', // production, development
  devtool: !isDev ? 'hidden-source-map' : 'eval',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/index.js',
    publicPath: '/',
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
      images: path.resolve(__dirname, './src/images/'),
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
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // file-loader: 폰트
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[contenthash].[ext]',
          },
        },
      },
      // file-loader: 이미지
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/images/[contenthash].[ext]',
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
      templateParameters: {
        title: process.env.TITLE, // 문서 타이틀
        lang: 'ko-KR', // 언어
      },
      minify: false, // 압축 설정
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new ESLintPlugin(),
  ],
  devServer: {
    // 개발 서버 설정
    port: 3000,
    hot: true, // 핫 모듈 교체(HMR) 활성화
    compress: true,
    open: true,
    historyApiFallback: true,
  },
}
// 개발모드
if (isDev) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new ReactRefreshWebpackPlugin())
} else {
  // 빌드모드
  config.plugins.push(new CleanWebpackPlugin())
  config.plugins.push(
    new MiniCssExtractPlugin({
      linkType: false,
      filename: 'assets/style/[name].[contenthash].css',
      chunkFilename: 'assets/style/[id].[contenthash].css',
    })
  )
}

module.exports = config
