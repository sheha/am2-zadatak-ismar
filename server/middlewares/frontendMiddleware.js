/* eslint-disable global-require */

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    const addProdMiddlewares = require('./addProdMiddlewares').default;
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../config/webpack.dev.babel');
    const addDevMiddlewares = require('./addDevMiddlewares').default;
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
