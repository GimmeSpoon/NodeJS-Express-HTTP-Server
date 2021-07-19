  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const users = require('./mongo.js');

// Copied the example code from the passport documentation and some random blogs
module.export = () => {
  	
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy({
      usernameField: 'id',
      passwordField: 'pw',
      session: true,
      passReqToCallback: false, // if set true, 'req' added to callback parameters
    }, (id, password, done) => {
     users.findOne({ id: id }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    });
  }));
}



  

