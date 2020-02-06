const express= require("express");
const passport=require("passport");
module.exports=app=>{
    app.get("/auth/google",passport.authenticate("google",{
        scope:["profile","email"]
    }))
  
    app.get("/auth/google/callback",passport.authenticate("google"),(req, res) => {
    console.log(55);
    
      res.redirect('/');
    });
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
      });
      app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
      });
}

//AIzaSyBew2o1DvFbvLAjrzMjOQpBRQKkOApTtQU
//CLIENT ID 750014062795-ttfltt0c0isl8vuu89ikssov9h2inha2.apps.googleusercontent.com
//PUBLIC
//CLIENT SCRECT 2cb6IF04wGC20NFNxbxVmuwH
//PRIVATE 