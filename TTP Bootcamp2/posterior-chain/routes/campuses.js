const express = require('express');
const router = express.Router();
const { Campus } = require('../database/models');

router.get('/', function(req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(err => console.log(err))
});

router.get('/:id', function(req, res, next){
    Campus.findByPk(req.params.id)
    .then(campus => res.json(campus))
    .catch(next)
});

router.post('/', async function(req, res, next){
    try{
      // console.log(req.query);
      let campus = await Campus.create(req.query);
      res.status(201).json (campus);
    }
    catch (err){
      next(err);
    }
  });

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
