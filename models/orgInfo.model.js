// var mongoose = require( 'mongoose' );
// var Schema = mongoose.Schema;

// // idea is to have current and past booard members....but will need a user.model for sign in /authentication



// var organizationSchema = new Schema({
//     Position: {
//         type: String,
//         required: true,
//         validate: requiredStringValidator },
//     name: [{
// 	    	first:
// 	        type: String,
// 	        required: true,
// 	        validate: requiredStringValidator },
// 	        {last:
// 	        type: String,
// 	        required: true,
// 	        validate: requiredStringValidator },
//         	],
// email: {
//       work: Email
//     , home: Email
//   }



//     email: {
//         type: String,
//         required: true,
//         validate: requiredStringValidator },
//     vendor: {
//         type: String,
//         required: true,
//         validate: requiredStringValidator },
//     prosCons: {
//         type: String,
//         required: true,
//         default: 'none'},
//     createdOn: { type: Date, default: Date.now }
// });

// // Export model...
// module.exports = mongoose.model( 'OrgInfo', organizationSchema );