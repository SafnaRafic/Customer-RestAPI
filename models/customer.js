const mongoose = require('mongoose');

mongoose.connect("mongodb://root:password@localhost/customers?authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Schemma - describe the data
const entrySchema = mongoose.Schema({
    name: String
});



module.exports = mongoose.model('Customer', entrySchema);































//     description: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });
// mongoose.Schema({
//     username: String,
//     password: String
// });