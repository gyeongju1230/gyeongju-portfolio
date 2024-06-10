const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          if (!webpackConfig.resolve.plugins) {
            webpackConfig.resolve.plugins = [];
          }
          webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));

          if (!webpackConfig.plugins) {
            webpackConfig.plugins = [];
          }
          webpackConfig.plugins.push(
            new MiniCssExtractPlugin({
              filename: '[name].[contenthash].css',
              chunkFilename: '[name].[contenthash].css',
            }),
          );

          webpackConfig.optimization = {
            ...webpackConfig.optimization,
            minimize: true,
            minimizer: [
              new TerserPlugin({
                terserOptions: {
                  compress: {
                    drop_console: true,
                  },
                },
              }),
              new CssMinimizerPlugin(),
            ],
          };

          return webpackConfig;
        },
      },
    },
  ],
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          displayName: false,
          fileName: false,
          minify: true,
          pure: true,
          transpileTemplateLiterals: true,
        },
      ],
    ],
  },
};
