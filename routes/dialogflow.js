const apiai = require('test422');
const app = apiai("09e87d444f5a4a0180544ae327d75788");
const getpredictions=require("../utilities/getpredictions");
const setDetais=require("../middleware/setSession");
module.exports=eapp=>{
    eapp.post("/api/postmsg", setDetais ,async (req, res) => {
       
      
        var request = app.textRequest(req.body.data, {    
            sessionId: '123456'
          });
          request.on('response', (response)=> {
           var data= getpredictions(response.result.fulfillment.speech);
            req.session.panswer=req.body.data;
            req.session.question=response.result.fulfillment.speech;  
            if(response.result.fulfillment.speech.includes("tracking ID is") ) 
            req.session.deliverydetail.ID="SR 890891";
            if (req.body.data.includes("890891")) {
                data.cardDetails=req.session.deliverydetail;
                res.send(data);
            }     
            else{
                res.send(data);
            }
           
           
          });
          request.on('error', function(error) {
              console.log(error);
          });
          request.end();
        
    });
}