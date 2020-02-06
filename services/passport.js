const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy
const keys = require("../config/keys")


passport.serializeUser((user, done) => {
  console.log(33);
  
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {   
    console.log(33);
      done(null, user);
  });

  passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'http://localhost:3000/auth/google/callback',
    proxy:true,
    passReqToCallback   : true
},async (request, accessToken, refreshToken, profile, done) => {
       done(null,profile);// it tells user authenticated
}));//arg tells how to uthrnticate

//AIzaSyBew2o1DvFbvLAjrzMjOQpBRQKkOApTtQU
//CLIENT ID 750014062795-ttfltt0c0isl8vuu89ikssov9h2inha2.apps.googleusercontent.com
//PUBLIC
//CLIENT SCRECT 2cb6IF04wGC20NFNxbxVmuwH
//PRIVATE 