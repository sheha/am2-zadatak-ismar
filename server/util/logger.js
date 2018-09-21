/* eslint-disable no-console */

import { gray, red, green, bold, magenta, blue, italic } from 'chalk';
import * as ip from 'ip';

const divider = gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {
  // Called whenever there's an error on the server we want to print
  error: (err) => {
    console.error(red(err));
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host) => {
    console.log(`Server started ! ${green('✓')}`);

    console.log(`
${bold('Access URLs:')}${divider}
Localhost: ${magenta(`http://${host}:${port}`)}
      LAN: ${magenta(`http://${ip.address()}:${port}`)}${divider}
${blue(`Press ${italic('CTRL-C')} to stop`)}
    `);
  }
};

export default logger;
