const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules[\/\\](?!react-dnd|dnd-core)/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, 'babel.config.js'),
          },
        },
      },
    ],
  },
  devtool: 'source-map',
};

const clientConfig = merge(config, {
  entry: {
    cube_analysis: './src/cube_analysis.js',
    cube_blog: './src/cube_blog.js',
    cube_compare: './src/cube_compare.js',
    cube_deck: './src/cube_deck.js',
    cube_deckbuilder: './src/cube_deckbuilder.js',
    cube_draft: './src/cube_draft.js',
    cube_list: './src/cube_list.js',
    cube_overview: './src/cube_overview.js',
    cube_playtest: './src/cube_playtest.js',
    topcards: './src/topcards.js',
    dashboard: './src/dashboard.js',
    blogpost: './src/blogpost.js',
    notifications: './src/notifications.js',
    cardpage: './src/cardpage.js',
  },
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});

const serverConfig = merge(config, {
  target: 'node',
  entry: {
    CubeListPage: './components/CubeListPage.js',
    CubePlaytestPage: './components/CubePlaytestPage.js',
    DashboardPage: './components/DashboardPage.js',
    DraftView: './components/DraftView.js',
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, 'dist', 'components'),
    libraryTarget: 'commonjs2',
  },
  externals: [
    nodeExternals({
      whitelist: ['react-tag-input', 'react-dnd', 'dnd-core', 'react-dnd-html5-backend', 'react-dnd-touch-backend'],
    }),
  ],
});

module.exports = { clientConfig, serverConfig };
