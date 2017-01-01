var express = require('express');
var router = express.Router();

// // /* GET users listing */

// // router.get('/', function(req, res){
// // 	res.render('users', req.user);
// // });

// router.use('/', function (req, res, next) {

//         if (!req.user) {
//             res.redirect('/');
//         }
//         next();
//  })

router.get('/', function(req, res){
    // res.render ('users', {user: {name: req.user.displayName, 
    // 						image: req.user._json.image.url}})
    res.render('users', {user:req.user});
});

module.exports = router; 