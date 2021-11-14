const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { resolve } = require('path');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: resolve(__dirname, 'src/index.ts'),
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: resolve(__dirname + '/dist'),
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  devtool: NODE_ENV === 'production' ? 'hidden-source-map' : 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpg)$/i,
        type: 'asset/resource',
        generator: {
          filename: './image/[contenthash][ext]',
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true,
    client: {
      logging: 'info',
    },
  },
};
