const {readFile} = require('fs').promises;

module.exports = async (req, res, next) => {
  try {
    const simpsons = await readFile('./simpson.json', 'utf8');
    //const body = req.body;
    const data = JSON.parse(simpsons);
    data.forEach((simpson)=>{
      if (simpson.id == req.body.id) {
        // return res.status(400).send('id já existe')
        next('teste')
      }
    })
    return next();
  } catch (error) {
    next(error)
  }
}