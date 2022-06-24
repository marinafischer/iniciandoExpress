const express = require('express');
const readFIle = require('../helpers/readFile');
const authorizationMiddleware = require('../middlewares/authorizationMiddleware');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const writeFIle = require('../helpers/writeFile');
const characterController = require('../controller/character');

const router = express.Router();

router.get('/:id', characterController.getById);

router.get('/', characterController.getAll);

router.post('/', authorizationMiddleware,nomeMiddleware, async (req,res)=>{
  const {nome} = req.body;
  try {
    const simpsons = await readFIle();
    simpsons.push({id:simpsons.length+1,nome})
    writeFIle(simpsons)
    res.status(200).json(simpsons);
  } catch (error) {
    console.log(error);
    res.status(400).json({message: 'deu algo errado'});
  }
})


module.exports = router;