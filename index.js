const express= require("express");
const mongoose=require("mongoose");
const bodyParser = require('body-parser');
const passport=require("passport")
require("./services/passport");
const cookieSession = require('cookie-session');
const keys =require("./config/keys");
const app=express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/dialogflow")(app);
require("./routes/authroute")(app);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT=process.env.PORT||4000;
app.listen(PORT);
