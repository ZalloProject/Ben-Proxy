const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;
