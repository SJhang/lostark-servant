const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('./logger');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 3000;

function onUnhandledError(err) {
  try {
    logger.error(err);
  } catch (e) {
    console.log('LOGGER ERROR:', e); // eslint-disable-line no-console
    console.log('APPLICATION ERROR:', err); // eslint-disable-line no-console
  }
  process.exit(1);
}

process.on('unhandledRejection', onUnhandledError);
process.on('uncaughtException', onUnhandledError);

const app = express();

// Logger
app.set('env', process.env.NODE_ENV);
logger.info(`Application env: ${process.env.NODE_ENV}`);
app.use(logger.expressMiddleware);

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Helmet Security
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'sameorigin' }));
app.use(helmet.noCache());

// application routes
const setupAppRoutes =
  process.env.NODE_ENV === 'development'
    ? require('./middleware/development')
    : require('./middleware/production');

setupAppRoutes(app);

http.createServer(app).listen(process.env.HTTP_PORT, () => {
  logger.info(
    `HTTP server is now running on http://localhost:${process.env.HTTP_PORT}`
  );
});
