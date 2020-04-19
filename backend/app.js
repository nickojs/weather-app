require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const weatherRoutes = require('./routes/weather');
const CORS = require('./helpers/CORS');

const app = express();

app.use(bodyParser.json());
app.use(CORS);

//weather routes
app.use('/weather', weatherRoutes)

//error handling
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.code || 500);
  res.send({ error: err.message, code: err.code || 500 });
});

app.listen(5000);
