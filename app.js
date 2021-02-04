const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const Customers = require("./controllers/customers");
const bodyParser = require('body-parser')
const cors = require("cors");
// require('dotenv/config')


app.use(bodyParser.json());
app.use(cors());

// Connect to db



//Listening to server
app.listen(3000);

//Routes
app.get('/', (req, res) => {
    res.send("Hello!");
});

app.get("/customers/list", Customers.list);























// //Routes
// app.get('/', (req, res) => {
//     res.send("We are on home");
// });

// app.get('/customers', (req, res) => {
//     res.send("We are on customer");
// });

// Import Routes
// const customerRoute = require('./controllers/customers');
// //Middleware
// app.use('/customers', customerRoute);