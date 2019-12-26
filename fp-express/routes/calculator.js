const express = require('express');
const router = express.Router();

const jsf = require('json-schema-faker');
const util = require('util')
const chance = require('chance')
const faker = require('faker')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

var selectCitiesSchema = {
  "type": "array",
  "minItems": 3,
  "maxItems": 8,
  "items": {
	      "type": "string",
	      "chance":  "city" 
   }
};

/* GET home page. */
router.get('/cities', (req, res) => {

  jsf.resolve(selectCitiesSchema).then(sample => {
  	   console.log(util.inspect(sample, 
  	   	{showHidden: false, depth: null}));
	   
	   res.render('cities',  
	  	{  cities:  sample });
  });

  
});
 

module.exports = router;
