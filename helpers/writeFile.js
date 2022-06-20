const {writeFile} = require('fs').promises

const writeFIle = async (data) => {
  await writeFile('./simpson.json', JSON.stringify(data));
}

module.exports = writeFIle;