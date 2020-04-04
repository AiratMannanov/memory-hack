const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

// APP
const app = express();

// Routs dir
const azureRouter = require('./routs/azure');

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Path's middleware
app.use('/', azureRouter);

app.listen(PORT, () => `Port is workinh on ${PORT}`)
