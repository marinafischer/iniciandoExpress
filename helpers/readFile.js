const {readFile} = require('fs').promises

const readFIle = async () => {
  const simpsons = await readFile('./simpson.json', 'utf8');
  return JSON.parse(simpsons);
}

module.exports = readFIle;