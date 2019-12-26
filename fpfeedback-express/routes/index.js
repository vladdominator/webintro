const express = require('express');
const router = express.Router();

const util = require('util')
const chance = require('chance')
const faker = require('faker')
 

/* GET home page. */
router.get('/', (req, res) => {
	res.render('index', 
	  	{ team:  'Whiteforest', 
	  	  year: 2019,
	  	  version: "0.2.1"
	  	});

  
});

module.exports = router;
