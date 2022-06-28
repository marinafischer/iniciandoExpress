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

const insert = async (name) => {
  const data = await characterModel.insert(name);
  // const resposta = {id: data.insertId, nome:name}
  return {id: data, nome:name};
}

module.exports = {getAll, getById, insert}