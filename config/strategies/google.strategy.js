var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;

var User = require('../../models/user.model.js');



module.exports = function () {
    passport.use(new GoogleStrategy({
            clientID: '1044360178305-pdp56c1v2nka3deikh4ojlhe87umjf0p.apps.googleusercontent.com',
            clientSecret: 'WlvHBkq3_Q4AjeczvKV1jN3b',
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },

        function (req, accessToken, refreshToken, profile, done) {
            var query = {
                'google.id': profile.id
            };

            User.findOne(query, function (error, user) {
                if (user) {
                    console.log('found');
                    done(null, user);
                } else {
                    console.log('not found');
                    var user = new User;

                    user.email = profile.emails[0].value;
                    user.image =
                        profile._json.profile_image_url;
                    user.displayName = profile.displayName;

                    user.google = {};
                    user.google.id = profile.id;
                    user.google.token = accessToken;
                    user.save();
                    done(null, user);
                }
            })
        }
    ));


};