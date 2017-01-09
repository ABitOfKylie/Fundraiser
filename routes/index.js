var express = require('express');
var router = express.Router();
var eventCtrl = require('../controllers/event.controller');

/* GET home page.  in this round first page = 'index' html*/

// router.get('/', function(req, res){
//     return eventCtrl.google(req, res);
// });
/* GET users  */

// moved below to routes/users.js
// router.get('/', function(req, res){
//     res.render('users', {user: {name:req.user.displayName, 
//                          image: req.user._json.image.url}});
// });

router.get('/', function(req, res){
    res.render('index', {title: "Your School/Organization's Name"});

});
/*GET go to vendor form*/
router.get('/vendor', function(req, res) {
    res.render('vendor', {title: "Your School/Organization's Name"});
});

/*GET go to temporary play login form*/
router.get('/login', function(req, res) {
    res.render('login', {title: "Your School/Organization's Name"});
});

/*GET listing of past events*/
router.get('/pastevents', function(req, res) {
  return eventCtrl.list(req, res);
});

/* POST filter by fundraiser name - pastevents page. */
router.post('/pastevents', function(req, res) {
    return eventCtrl.filterByFundraiser(req, res);
});

/* GET new Event page. */
router.get('/newevent', function(req, res) {
    return eventCtrl.getEvent(req, res);
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