const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const cors = require('cors');
const path = require('path');

async function open (uri) {
  await mongoose.connect(uri);
}

const app = express();

const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

app.use(cors());

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { customCssUrl: CSS_URL }));

app.use('/public', express.static(path.join(__dirname, '../public')));

app.use(routes);

module.exports = { app, open, routes };
