module.exports = (req, res, next) => {
    if (req.session.question) {
        if (req.session.question == `Let me know the location to pick up the delivery` || req.session.question == `Give me the address from where I have to pick up the delivery`) {
            req.session.deliverydetail.Pickup = req.body.data;
        }
        else if (req.session.question == `Now give me the address to where we have to drop off the goods` ||
            req.session.question == `Tell me the address where we need to deliver the goods`) {
                req.session.deliverydetail.Dropoff = req.body.data;
        }
        else if (req.session.question == `What kind of goods should we transfer?` || req.session.question == "Enter the details of the goods to be picked up") {
            req.session.deliverydetail.Items = req.body.data;
        }
        else if (req.session.question == `Let me know the date and time for us to pick up the delivery`) {
            req.session.deliverydetail.Time = req.body.data;
        }
        else if (req.session.question.includes("The cost of the delivery comes around")) {
            req.session.deliverydetail.Cost = "$320";
        }
    }
    next();
};
