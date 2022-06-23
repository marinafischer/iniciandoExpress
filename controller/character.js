const characterService = require('../services/character');

const getAll = async (req,res)=> {
  try {
    const data = await characterService.getAll();
    res.status(200).json(data);

  } catch (error) {
    return res.status(400).send('deu ruim')
  }
}

module.exports = {getAll}