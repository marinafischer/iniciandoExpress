const characterModel = require('../model/character');

const getAll = async () => {
  const data = await characterModel.getAll();
  return data;
};

const getById = async (id) => {
  const [data] = await characterModel.getById(id);
  if (data === undefined) throw {error: 'personagem não econtrado'}
  return data;
}

module.exports = {getAll, getById}