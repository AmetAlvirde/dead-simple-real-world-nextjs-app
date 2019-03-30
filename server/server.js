require('dotenv').config();

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieSession = require('cookie-session');
const http = require('http');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const router = require('./router');

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const httpServer = http.Server(server);

    server.use(compression());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(
      cookieSession({
        name: 'session',
        keys: ['key1', 'key2'],
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      })
    );
    server.use('/', router);
    server.get('*', (req, res) => handle(req, res));

    httpServer.listen(port, err => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Custom server ready on http://localhost:${port}`);
    });
  })
  .catch(err => {
    // eslint-disable-line no-console
    console.error(err.stack);
    process.exit(1);
  });
