const { response } = require('express');
const express = require('express');
const router = express.Router();


const dummy = require('./dummy');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(dummy);
});

router.get('/:id', function(req, res, next) {
  res.json(dummy.find(clss => clss.id === parseInt(req.params.id)));
});

router.post('/', (req, res , next)=>{
  const cls = {id: dummy.length+1,...req.body};
  dummy.push(cls);
  res.json(cls);
})
module.exports = router;
