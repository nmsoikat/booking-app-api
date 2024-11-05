'use strict';

require('dotenv').config();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const compression = require('compression');

const { TrimMiddleware, ErrorMiddleware } = require('./src/app/middlewares');

const port = process.env.PORT || 3030;
const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/storage', express.static(path.join(__dirname, 'storage')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(TrimMiddleware);
app.use(compression())

// Route
require('./src/app/routes')(app);

// Server Listening
app.listen(port, () => {
    console.log(`API server started on PORT: ${port}`);
});

// 404 Not Found
app.all('*', function (req, res, next) {
    return next(new Error('404 | Page not found!'))
});

// Error Middleware
app.use(ErrorMiddleware);