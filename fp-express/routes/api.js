const express = require('express');
const router = express.Router();
const faker = require('faker')


/* GET users listing. */
router.get('/calculator/time/:from/:to', (req, res) => {
  console.log("day=" + req.query.day + ", from=" + req.params.from + ", to=" + req.params.to)
  res.send({from: req.params.from, to: req.params.to, time: faker.date.recent()});
});

module.exports = router;
