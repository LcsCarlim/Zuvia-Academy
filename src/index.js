const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

async function open (uri) {
  await mongoose.connect(uri);
}

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { customCssUrl: CSS_URL }));

app.use('/public', express.static(path.join(__dirname, '../public')));

app.use(routes);

app.use(cors());

module.exports = { app, open, routes };
