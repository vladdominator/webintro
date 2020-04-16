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
  "minItems": 10,
  "maxItems": 20,
  "items": {
	  "type": "object",
	  "properties": {
	    "name": {
	      "type": "string",
	      "faker": "name.findName"
	    },
	    "email": {
	      "type": "string",
	      "faker": "internet.email"
	    },
	    "age" : {
	    	"type": "string", 
	    	"chance": {
	    		 "age": {
	      			"type": "adult"
	    		 }
	    	}
	    }
	  },
	  "required": [
	    "name",
	    "email",
	    "age"
	   ]
	  }
};

/* GET home page. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
  	   console.log(util.inspect(sample, 
  	   	{showHidden: false, depth: null}));
	   
	   res.render('feedback', 
	  	{  opinions:  sample });
  });

  
});

module.exports = router;
