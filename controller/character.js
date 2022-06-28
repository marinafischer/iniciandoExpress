const characterService = require('../services/character');

const getAll = async (req,res)=> {
  try {
    const data = await characterService.getAll();
    res.status(200).json(data);
  } catch (error) {
    return res.status(400).json('deu ruim')
  }
}

const getById = async (req,res, next)=> {
  try {
    const {id} = req.params;
    const data = await characterService.getById(id);
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
}

module.exports = {getAll, getById}