const Customer = require("../models/customer");

// List all the customer
const list = async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.json(customers);
  } catch (e) {
    console.error("Error fetching customers from database: ", e);
    res.status(500).send("Unable to fetch customers sorrys");
  }
};

// Add Customer
const add = async (req, res) => {
  try {
    const cust_number = req.body.cust_number;
    const name = req.body.name;
    const email = req.body.email_address;
    const phone = req.body.phone;
    const address = req.body.address;
    const customer = new Customer({
      cust_number: cust_number,
      name: name,
      email_address: email,
      phone: phone,
      address: address,
    });
    await customer.save();
    res.json(customer);
  } catch (e) {
    console.error("Error saving to the database ", e);
    res.status(500).send("Unable to save customers, sorry!!");
  }
};




module.exports = { list, add};