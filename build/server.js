// Generated by CoffeeScript 1.9.3
var application, base;

if ((base = process.env).NODE_ENV == null) {
  base.NODE_ENV = "development";
}

process.on('uncaughtException', function(err) {
  console.error(err.message);
  return console.error(err.stack);
});

if (!process.env.DEFAULT_REDIRECT_PORT) {
  process.env.DEFAULT_REDIRECT_PORT = 9103;
}

application = module.exports = function(callback) {
  var americano, errorMiddleware, initialize, options;
  americano = require('americano');
  initialize = require('./server/initialize');
  errorMiddleware = require('./server/middlewares/errors');
  options = {
    name: 'proxy',
    port: process.env.PORT || 9104,
    host: process.env.HOST || "127.0.0.1",
    root: __dirname
  };
  return americano.start(options, function(app, server) {
    app.use(errorMiddleware);
    return initialize(app, server, callback);
  });
};

if (!module.parent) {
  application();
}
