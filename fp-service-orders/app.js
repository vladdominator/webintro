'use strict';

var SwaggerExpress = require('swagger-express-mw');
const express = require('express');
const path = require('path');
const logger = require('./logger');
var app = express();

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

// to serve docs
app.use(express.static(path.join(__dirname, 'public')));

// to expose health check 
app.use('/health', require('express-healthcheck')());

// we don't integrate morgan or swagger-logger to winston here yet

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10011;
  app.listen(port);

  logger.info('check this to see docs :\n  http://127.0.0.1:' + port + '/');
  
  if (swaggerExpress.runner.swagger.paths['/tea/orders']) {
  	logger.info('try this to test:\ncurl http://127.0.0.1:' + port + '/api/v1/tea/orders');

  }
});
