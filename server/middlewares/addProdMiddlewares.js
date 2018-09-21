import { resolve } from 'path';
import { static } from 'express';
import compression from 'compression';

export default function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || resolve(process.cwd(), 'build');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, static(outputPath));

  app.get('*', (req, res) => res.sendFile(resolve(outputPath, 'index.html')));
};
