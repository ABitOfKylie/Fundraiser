var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var memberNameValidator = [
    function (val) {
        return (val.length > 0 && val.toLocaleLowerCase() != 'none')
    },
    // Custom error text...
    'Select a valid member name.' ];

var requiredStringValidator = [
    function (val) {
        var testVal = val.trim();
        return (testVal.length > 0)
    },
    // Custom error text...
    '{PATH} cannot be empty' ];

// var subVendor = {
//     vendorName:String,
//     address: String,
//     city: String,
//     state: String,
//     phone: String,
//     contactPerson: String
// }

var fundraiserSchema = new Schema({
    fundraiserType: {
        type: String,
        required: true,
        validate: requiredStringValidator },
    profitLoss: {
        type: String,
        required: true,
        validate: requiredStringValidator },
    revenue: {
        type: Number,
        required: true },
    description: {
        type: String,
        required: true,
        validate: requiredStringValidator },
    // vendor: [subVendor],
    vendor: {
        type: String,
        required: true,
        validate: requiredStringValidator },
    prosCons: {
        type: String,
        required: true,
        default: 'none'},
    createdOn: { type: Date, default: Date.now }
});

// Export model...
module.exports = mongoose.model( 'Fundraiser', fundraiserSchema );
