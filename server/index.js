/* eslint consistent-return:0 */

import express from 'express';
import { error, appStarted } from './util//logger';

import { host as _host } from './util/argv';
import port from './util//port';
import setup from './middlewares/frontendMiddleware';
import { resolve } from 'path';

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = _host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return error(err.message);
  }
  appStarted(port, prettyHost);
});
