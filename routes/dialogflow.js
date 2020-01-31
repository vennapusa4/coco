const apiai = require('test422');
const app = apiai("09e87d444f5a4a0180544ae327d75788");
const getpredictions=require("../utilities/getpredictions")
module.exports=eapp=>{
    eapp.post("/api/postmsg", async (req, res) => {
        console.log(req.body);
        var request = app.textRequest(req.body.data, {    
            sessionId: '123456'
          });
          request.on('response', (response)=> {
           var data= getpredictions(response.result.fulfillment.speech);
            res.send(data);
          });
          request.on('error', function(error) {
              console.log(error);
          });
          request.end();
        
    });
}