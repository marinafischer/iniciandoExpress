const characterModel = require('../model/character');
const error = require('../helpers/errorObject');

const getAll = async () => {
  const data = await characterModel.getAll();
  return data;
};

const getById = async (id) => {
  const [data] = await characterModel.getById(id);
  if (data === undefined) throw error[0];
  return data;
}

module.exports = {getAll, getById}