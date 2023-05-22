const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');

async function open (uri) {
  await mongoose.connect(uri);
}

const app = express();

app.use(express.json());

app.use(routes);

module.exports = { app, open };
