var optionsdata = require("./options")
module.exports = (text) => {
    const emoji="<span>&#128515;</span><br/>";
    var options = [];
    if (text == `Let me know the location to pick up the delivery` || text == `Give me the address from where I have to pick up the delivery`
  ) {
        text = "Alright! I can help you with that " +emoji +  text;
        var options = optionsdata[1];
    }
   else if (text == `Now give me the address to where we have to drop off the goods` ||
        text == `Tell me the address where we need to deliver the goods`) {
        text = "Great!" +emoji + text
        var options = optionsdata[1];
    }
    else if (text == `What kind of goods should we transfer?` || text == "Enter the details of the goods to be picked up") {
        text = "Great!" +emoji + text;
        var options = optionsdata[2];
    }
    else if (text == `Let me know the date and time for us to pick up the delivery`) {
        text = "Good! " + text;
        var options = optionsdata[3];
    }
    else if (text.includes("The cost of the delivery comes around"
    )) {
        text = text;
        var options = optionsdata[4];
    }
    else if (text.includes("Your tracking ID is SR"
    )) {
        text = text;
        var options = optionsdata[5];
    }
    else if (text.includes("shipment ID")) {
        text = "Great!"+emoji +text;
        var options = [];
    }
    else if (text.includes("Here are the details"
    )) {
        text = text;
        var options = optionsdata[6];
    }
    else if (text.includes("Let me know the email"
    )) {
        text = "I can do that for you"+emoji +text;
        var options = ["a@abc.com"];
    }
    else if (text.includes("I have sent the mail")) {
        text=text;
        var options=optionsdata[7];
    }
    else {
        text=text;
        options=optionsdata[0];
    }
    return {text,options};
}
// 597310521395-a33m2kqcfq4lsooa2cfpnntsln70ak0i.apps.googleusercontent.com
// md_0EMcsId2pJ5Kfr9_mOfpL