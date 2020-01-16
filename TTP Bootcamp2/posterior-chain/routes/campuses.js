const express = require('express');
const router = express.Router();
const { Campus } = require('../database/models');

router.get('/', function(req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(err => console.log(err))
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
