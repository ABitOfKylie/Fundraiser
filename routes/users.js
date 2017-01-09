var express = require('express');
var router = express.Router();

// // /* GET users social stuff */

// // router.get('/', function(req, res){
// // 	res.render('users', req.user);
// // });

router.use('/', function (req, res, next) {

        if (!req.user) {
            res.redirect('index');
        }
        next();
 })
//issue - line19 image does not display nor does name. line 20 name does display
router.get('/', function(req, res){
    // res.render ('users', {user: {name: req.user.displayName, 
    // 						image: req.user.image}});
    res.render('users', {user:req.user});
});

module.exports = router; 