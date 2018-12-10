// webpack configs
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../config/webpack.config.dev');
const logger = require('../logger');

const compiler = webpack(webpackConfig);

module.exports = function setup(app) {
  // set up webpack middlewares
  app.use(
    webpackDevMiddleware(compiler, {
      logger,
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
      },
    })
  );
  app.use(webpackHotMiddleware(compiler));

  app.get('/events', (req, res) => {
    res.send({ express: "Here are events!"})
  });
};
