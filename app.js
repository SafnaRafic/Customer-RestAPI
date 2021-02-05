const express = require("express");
const app = express();
const Customers = require("./controllers/customers");
const CustomerModel = require("./models/customer");
const bodyParser = require("body-parser");
const cors = require("cors");
const { restart } = require("nodemon");
// require('dotenv/config')

var path=require('path');
app.use(bodyParser.json());
app.use(cors());

//Listening to server
app.listen(3000);

//Routes

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/index.html'));
})
//Get all customer lists
app.get("/customers/list", Customers.list);

//Get a particular customer
app.get("/customers/:custID", async (req, res) => {
  try {
    const customers = await CustomerModel.findById(req.params.custID);
    if (customers == null) {
      res.send("No data found!!");
    }
    res.json(customers);
  } catch (e) {
    console.error("Error fetching customers from database: ", e);
    res.status(500).send("Unable to fetch customers sorrys");
  }
});

//Post - Add the customer
app.post("/customers/add", Customers.add);

//Delete - Delete the customer by _id
app.delete("/customers/:custID", async (req, res) => {
  try {
    const customers = await CustomerModel.findById(req.params.custID);
    if (customers == null) {
      res.send("No data found!!");
    } else {
      CustomerModel.remove(customers, function (err, obj) {
        if (err) throw err;
        else res.send("Successfully deleted !!");
      });
    }
  } catch (e) {
    console.error("Error deleting customers from database: ", e);
    res.status(500).send("Unable to delete the customer");
  }
});

//Put -  Update the customer
app.patch("/customers/update/:custID", async (req, res) => {
  try {
    const updatedCustomer = await CustomerModel.updateOne(
      { _id: req.params.custID },
      {
        $set: {
          phone: req.body.phone,
          email_address: req.body.email_address,
          address: req.body.address,
        },
      }
    );
    res.json(updatedCustomer);
  } catch (e) {
    console.error("Error updating customers from database: ", e);
    res.status(500).send("Cannot update the customer");
  }
});

// Import Routes
// const customerRoute = require('./controllers/customers');
// //Middleware
// app.use('/customers', customerRoute);
