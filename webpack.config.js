const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// 개발모드 유무
const isDev = process.env.NODE_ENV !== 'production'
console.log(`💻💻💻💻💻💻💻💻💻💻💻💻💻💻 ${isDev ? '[ Dev Mode ]' : '[ Product Mode ]'} 💻💻💻💻💻💻💻💻💻💻💻💻💻💻`)

// 모드별 환경변수 설정
const envPath = `./.env.${isDev ? 'development' : 'production'}`
dotenv.config({ path: envPath })

const config = {
  name: 'React18-webpack-setting',
  mode: isDev ? 'development' : 'production', // development, production
  devtool: !isDev ? 'hidden-source-map' : 'eval',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/index.js',
    publicPath: '/',
    clean: true
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
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false, // CSS파일 안에서 정적파일로 background-image 사용할려면 false
            },
          },
        ],
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

// 모드 별 플러그인 추가
if (isDev) {
  // 개발모드
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new ReactRefreshWebpackPlugin())
} else {
  // 빌드모드
  config.plugins.push(
    new MiniCssExtractPlugin({
      linkType: false,
      filename: 'assets/css/[name].[contenthash].css',
      chunkFilename: 'assets/css/[id].[contenthash].css',
    })
  )
  // 정적파일 복사 플러그인
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: 'public/',
          to: '',
          globOptions: {
            ignore: ['**/*.html', '**/*.js'],
          },
        },
      ],
    })
  )
}

module.exports = config
