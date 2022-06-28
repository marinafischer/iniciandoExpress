const express = require('express');
const authorizationMiddleware = require('../middlewares/authorizationMiddleware');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const characterController = require('../controller/character');

const router = express.Router();

router.get('/:id', characterController.getById);

router.get('/', characterController.getAll);

router.post('/', authorizationMiddleware,nomeMiddleware, characterController.insert)


module.exports = router;