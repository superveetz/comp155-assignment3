'use strict';

module.exports = function(server) {
  // Install a `/` route that returns views/index.html
  server.set('view engine', 'ejs');
  server.set('views', __dirname + '/../views');

  var router = server.loopback.Router();

  router.get('/', function(req, res) {
    res.render('index');
  });

  server.use(router);
};
