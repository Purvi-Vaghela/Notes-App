exports.isLoggedIn = function (req, res, next) {
    if (req.user) {
      next();
    } else {
      res.render('access-denied'); // Renders the access-denied.ejs view
    }
  };
  