var models = ['fundraiser.model.js', 'user.model.js'];

exports.initialize = function() {
    var l = models.length;
    for (var i = 0; i < l; i++) {
        require(models[i])();
    }
};

module.exports = register_models;

