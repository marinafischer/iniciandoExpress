const characterModel = require('../model/character');

const getAll = async () => {
  const data = await characterModel.getAll();
  return data;
};

module.exports = {getAll}