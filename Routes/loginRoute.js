const express = require('express');
const {randomUUID} =require('crypto');
const loginMiddleware = require('../middlewares/loginMiddleware');
const router = express.Router();

router.post('/', loginMiddleware ,(req,res)=>{
  const token = randomUUID().split('-').join('').substring(0,20);
  res.status(200).json({token});
})

module.exports = router;