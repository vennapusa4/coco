module.exports = (text) => {
    var options=[];
    if (text=="Hi! I am CoCo. I can help you with logistics for your goods. How can I help?"
    ||text=="Hello! CoCo here. I can help you with logistics for your goods. You can schedule a delivery, arrange a pick up, know status and much more. How can I help?") {
        options=["Schedule a Delivery", "Arrange a Pick up", "Two Way", "Know Status"]
    }
   else if (text==`Let me know the location to pick up the delivery`||
   `Give me the address from where I have to pick up the delivery"
   `) {
       text="Alright! I can help you with that :)**"+text;
       options=["Pick up the location"]  
   }
   if (text==`Now give me the address to where we have to drop off the goods`||
   `Tell me the address where we need to deliver the goods`
   ) {
    text="Great! Tell me the address where we need to deliver the goods  :)**"+text
   }
   if (text ==`What kind of goods should we transfer?` || "Enter the details of the goods to be picked up"
   ) {
       text="Great! Enter the details of the goods to be picked up **"+text;
   }
   if (text ==`Enter the details of the goods to be picked up`
   ) {
       
   }
   if (text ==`Let me know the date and time for us to pick up the delivery 
   `
   ) {
       
   }
   if (text ==`"Great! I have scheduled the delivery. Your tracking ID is SR 890891
   Hurray! Your delivery has been scheduled. Your tracking ID is SR 890891"
   `
   ) {
       
   }
   if (text ==`"Please give me the six digit shipment ID
   Give me shipment ID which looks like SR XXXXXX
   Share me you six digit shipment ID"
   `
   ) {
       
   }
   
  };
  