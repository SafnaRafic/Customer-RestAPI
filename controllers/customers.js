const Customer = require('../models/customer');

const list = async(req, res) => {
    try {
        // console.log("Route");
        const customers = await Customer.find({});
        // console.log(customers);
        // res.send(customers);
        res.json(customers);
    } catch (e) {
        console.error("Error fetching customers from database: ", e);
        res.status(500).send("Unable to fetch customers sorrys");
    }
};
module.exports = { list };



















// router.get('/', (req, res) => {
//     res.send("we are on customer");
// });

// router.post('/customers', (req, res) => {

//     const customer = new Customer({
//         name: req.body.name
//     })
//     customer.save()
//     res.json(customer);


// .then(data => {
//         res.json(data)
//     })
// .catch(err => {
//     res.json({ message: err })
// })
// })

// module.exports = router;