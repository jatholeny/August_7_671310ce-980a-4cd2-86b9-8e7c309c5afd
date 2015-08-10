var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


router.get('/test1',function(req,res){
  res.status(200).json({message:'haha'});
});

router.post('/test2',function(req,res){
  console.log(req.files);
  res.status(200).json({message:'haha'})
});

router.get('/test3',function(req,res){
  res.status(200).json({message:'haha'})
});