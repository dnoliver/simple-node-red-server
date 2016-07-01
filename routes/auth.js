var basicAuth = require('basic-auth');

/**
 * Authentication function
 */
exports.CheckAuthentication = function (req, res, next) {
  var user = basicAuth(req);
  if (!user || !user.name || !user.pass) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
    return;
  }
  if (/* user.name === 'admin' && */ user.pass === proces.env["PASSWORD"]) {
    next();
  } else {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
    return;
  }
};
