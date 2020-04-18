require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const weatherRoutes = require('./routes/weather');

const app = express();

app.use(bodyParser.json());

//weather routes
app.use('/weather', weatherRoutes)

//error handling
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.code || 500);
  res.send({ error: err.message });
});

app.listen(5000);
