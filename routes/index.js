var express = require('express');
var router = express.Router();
var eventCtrl = require('../controllers/event.controller');

/* GET home page. */
router.get('/', function(req, res) {
  return eventCtrl.list(req, res);
});

/* POST filter by fundraiser name - home page. */
router.post('/', function(req, res) {
    return eventCtrl.filterByFundraiser(req, res);
});

/* GET new Event page. */
router.get('/newevent', function(req, res) {
    return eventCtrl.getNote(req, res);
});

/* POST New Event page. */
router.post('/newevent', function(req, res) {
    return eventCtrl.create(req, res);
});

module.exports = router;

//app.post('/signup', function(req, res) {
        //     var user = new User({username: req.body.username, email: req.body.email});
        //     bcrypt.genSalt(salt, function(err, salt) {
        //         bcrypt.hash(req.body.password, salt, function(err, hash) {
        //             user.password = hash;
        //             user.save(function(err, response) {
        //                 if (err) throw err;
        //                 console.log('We saved: ', res);
        //                 res.redirect('/index');
        //             });
        //         });
        //     });
        // });