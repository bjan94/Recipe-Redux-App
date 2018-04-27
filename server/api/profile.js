const router = require('express').Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const User = require('../models/user');

module.exports = function (app) {
  // TODO: check to see if user is authenticated
  // STUB
  router.use(isAuthenticated(app));
  // ENDSTUB

  router.get('/profile/:id?/info', function (req, res) {
    // TODO: This route will grab the information for a given profile. If no id is given,
    // look for the current user's profile. Use the getFormattedProfileById static method
    // in User. If there aren't any errors, return json in the format as follows:
    //  { res: 'success', data: profileInfoHere }
    // If there is an error, return json in the format as follows
    //  { res: 'failure', data: 'errorInstanceHere' }

    // STUB
    let user = req.params.id ? req.params.id : req.user._id;
    User.getFormattedProfileById(user, req.user._id)
      .then((profile) => {
        res.json({ res: 'success', data: profile });
      })
      .catch((err) => {
        res.json({ res: 'failure', data: err });
      });
    // ENDSTUB
  });


  return router;
};
