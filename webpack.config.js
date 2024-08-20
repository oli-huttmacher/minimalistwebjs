const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Nettoie le dossier dist avant chaque build
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // inject: false, //empeche l'insertion automatique de la balise  <script defer="defer" src="bundle.js"></script>
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new HtmlMinimizerPlugin(),
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
};