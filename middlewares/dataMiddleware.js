const {readFile} = require('fs').promises;

module.exports = async (req, res, next) => {
  try {
    console.log('entrei no middleware')
    const simpsons = await readFile('./simpson.json', 'utf8');
    const {id} = req.body;
    const data = JSON.parse(simpsons);
    data.forEach((simpson)=>{
      if (+simpson.id === id) {
        return res.status(400).send('id já existe')
      }
    })
    return next();
  } catch (error) {
    return res.status(400).end();
  }
}