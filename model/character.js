const connections = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM characters;';
  const [data] = await connections.execute(query);
  return data;
}

const getById = async (id) => {
  const query = 'SELECT * FROM characters WHERE id=?;';
  const [data] = await connections.execute(query, [id]);
  return data;
}

module.exports = {getAll, getById}