const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
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
    app: './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/index.js',
    publicPath: '/',
    clean: true,
    assetModuleFilename: 'assets/images/[name]_[contenthash][ext]',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['last 2 chrome versions'] },
                debug: isDev,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          env: {
            development: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
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
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new Dotenv({ path: envPath }),
    new webpack.EnvironmentPlugin({ NODE_ENV: isDev ? 'development' : 'production' }),
    new ForkTsCheckerWebpackPlugin({ async: false }),
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
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
    }),
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
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['**/*.html', '**/*.js'],
          },
        },
      ],
    })
  )
}

module.exports = config
