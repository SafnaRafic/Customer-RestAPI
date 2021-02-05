const mongoose = require("mongoose");

//Connect db
mongoose.connect(
  "mongodb://root:password@localhost/customers?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//Schema - describe the data
const entrySchema = mongoose.Schema({
  cust_number: Number,
  name: String,
  email_address: String,
  phone: Number,
  address: String,
});

module.exports = mongoose.model("Customer", entrySchema);
