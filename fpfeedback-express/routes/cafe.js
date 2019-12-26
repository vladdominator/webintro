const express = require('express');
const router = express.Router();

const jsf = require('json-schema-faker');
const util = require('util')
const chance = require('chance')
const faker = require('faker')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

var schema = {
  "type": "array",
  "minItems": 3,
  "maxItems": 5,
  "items": {
	  "type": "object",
	  "properties": {
	    "name": {
	      "type": "string",
	      "chance": "company"
	    },
	    "city": {
	      "type": "string",
	      "chance":  "city" 
	    },
	    "price" : {
	    	"type": "string", 
	    	"chance": {
	    		 "dollar": {
	      			"max": "20"
	    		 }
	    	}
	    }
	  },
	  "required": [
	    "name",
	    "city",
	    "price"
	   ]
	  }
};

/* GET home page. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
  	   console.log(util.inspect(sample, 
  	   	{showHidden: false, depth: null}));
	   
	   res.render('cafe',  
	  	{  advertisements:  sample });
  });

  
});

module.exports = router;
