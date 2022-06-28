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

const insert = async (name) => {
  const query = 'INSERT INTO characters (name) VALUES (?);'
  const [data] = await connections.execute(query, [name]);
  const {insertId}= data;
  // return data
  return insertId;
}

module.exports = {getAll, getById, insert}