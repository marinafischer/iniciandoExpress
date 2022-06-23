const connections = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM characters;';
  const [data] = await connections.execute(query);
  return data;
}

module.exports = {getAll}