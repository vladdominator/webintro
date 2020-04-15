const express = require('express');
const router = express.Router();
const faker = require('faker')


/* GET users listing. */
router.get('/hostels/:hostel/orders', (req, res) => {
  console.log("GET /hostels with PathParam '" + 
  	req.params.hostel + "'',  QueryParam '" + 
  	req.query.date + "'")
  res.send([
  	{ 
  	 date: req.query.date, room: '29',
  	 product: 'English breakfast', 
  	 quantity: faker.random.number(), waiting: 50, status: 'processing'
  	}, 
  	{ 
  	 date: req.query.date, room: '30',
  	 product: 'Ulun', 
  	 quantity: faker.random.number(), waiting: 50, status: 'processing'
  	}
  ]);
});

module.exports = router;
