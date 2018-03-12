const fs = require('fs');
const path = require('path');
const express = require('express');

const session = require('express-session');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const http = require('http');
const http2 = require('spdy');
const env = require('./config/env');

const app = express();

const server = env.httpConf.isSSL ? http2.createServer(env.httpConf.certificate, app) : http.createServer(app);

app.use(morgan("common"));
app.use(helmet());
app.use(compression());

app.use(session({
    secret: Symbol('secret for session').toString(),
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: Infinity,
        httpOnly: false
    }
}));

app.use('/', express.static('./public'));

server.listen(env.port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Listening at: https://${host}:${port}`);
});
