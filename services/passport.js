const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy
const keys = require("../config/keys")


passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {   
    User.findById(id).then(user => {
      done(null, user);
    });
  });

  passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "http://localhost:3000/outh/google/callback",
    proxy:true,
    passReqToCallback   : true
}, (a, r, p,d) => {
       d(null,p);
}));//arg tells how to uthrnticate

//AIzaSyBew2o1DvFbvLAjrzMjOQpBRQKkOApTtQU
//CLIENT ID 750014062795-ttfltt0c0isl8vuu89ikssov9h2inha2.apps.googleusercontent.com
//PUBLIC
//CLIENT SCRECT 2cb6IF04wGC20NFNxbxVmuwH
//PRIVATE 