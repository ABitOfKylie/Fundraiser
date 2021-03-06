var Fundraiser = require('../models/fundraiser.model.js');
var User = require('../models/user.model.js');

// exports.google = function(req, res){
//       res.render('users', {user: {name: req.user.displayName,
//                               image: req.user._json.image.url}});
// };



exports.list = function(req, res) {
    var query = Fundraiser.find();

    query.sort({ eventDate: 'desc'})
        .limit(12)
        .exec(function(err, results){
           res.render('pastevents', {title: 'Fundraiser - List', events: results});
        });

};

exports.filterByFundraiser = function(req, res) {
    var query = Fundraiser.find();
    var filter = req.body.fundraiserType;
    console.log(filter);
    query.sort({ eventDate: 'desc' });
    if (filter.length > 0)
    {
        query.where({ fundraiserType: filter})
    }

    query.exec(function(err, results) {
        res.render('pastevents', { title: 'Fundraiser - List', events: results });
    });
};


exports.create = function(req, res) {
    var entry = new Fundraiser({
        fundraiserType: req.body.fundraiserType,
        eventDate: req.body.eventDate,
        profitLoss: req.body.profitLoss,
        description: req.body.description,
        vendor: req.body.vendor,
        revenue: req.body.revenue,
        prosCons: req.body.prosCons
    });

    entry.save(function (err) {
        if (err) {
            var errMsg = 'Sorry, there was an error saving the fundraiser event. ' + err;
            res.render('newevent', { title: 'Fundraiser - New Event (error)', message: errMsg });
        }
        else {
            console.log('Fundraiser - New Event was saved!');
            // Redirect to the home page to display list of events...
            res.redirect(301, '/pastevents');
        }
    });

};

exports.getEvent = function (req, res) {
    res.render('newevent', { title: 'Fundraiser - New Event'});
}