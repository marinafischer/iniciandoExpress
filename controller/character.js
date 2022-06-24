const characterService = require('../services/character');

const getAll = async (req,res)=> {
  try {
    const data = await characterService.getAll();
    res.status(200).json(data);

  } catch (error) {
    return res.status(400).json('deu ruim')
  }
}

const getById = async (req,res)=> {
  try {
    const {id} = req.params;
    const data = await characterService.getById(id);
    res.status(200).json(data);

  } catch (error) {
    return res.status(400).send(error)
  }
}

module.exports = {getAll, getById}