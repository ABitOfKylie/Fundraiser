var Fundraiser = require('../models/fundraiser.model.js');

exports.list = function(req, res) {
    var query = Fundraiser.find();

    query.sort({ createdOn: 'desc'})
        .limit(12)
        .exec(function(err, results){
           res.render('index', {title: 'Fundraiser - List', notes: results});
        });

};

exports.filterByFundraiser = function(req, res) {
    var query = Fundraiser.find();
    var filter = req.body.fundraiserType;

    query.sort({ createdOn: 'desc' });

    if (filter.length > 0)
    {
        query.where({ fundraiserType: filter})
    }

    query.exec(function(err, results) {
        res.render('index', { title: 'Fundraiser - List', notes: results });
    });
};


exports.create = function(req, res) {
    var entry = new Fundraiser({
        fundraiserType: req.body.fundraiserType,
        profitLoss: req.body.profitLoss,
        description: req.body.description,
        vendor: req.body.vendor,
        prosCons: req.body.prosCons
    });

    entry.save(function (err) {
        if (err) {
            var errMsg = 'Sorry, there was an error saving the fundraiser event. ' + err;
            res.render('newevent', { title: 'Fundraiser - New Event (error)', message: errMsg });
        }
        else {
            console.log('Fundraiser - New Event was saved!');
            // Redirect to the home page to display list of notes...
            res.redirect(301, '/');
        }
    });

};

exports.getNote = function (req, res) {
    res.render('newevent', { title: 'Fundraiser - New Event'});
}