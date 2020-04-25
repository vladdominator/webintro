const express = require('express');
const router = express.Router();

const util = require('util')
const chance = require('chance')
const faker = require('faker')

const packageGenVersion = require('../lib/version.js') 
const pm_id = process.env.pm_id || 0
const instance_id = process.env.NODE_APP_INSTANCE || 0 


/* GET home page. */
router.get('/', (req, res) => {
	res.render('index', 
	  	{ team:  'FP', 
	  	  year: 2020,
	  	  version: packageGenVersion,
	  	  id: pm_id,
	  	  instance: instance_id
	  	});

  
});

module.exports = router;
