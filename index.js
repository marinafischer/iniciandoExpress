const express = require('express');
const app = express()
const port = 3000
const {readFile, writeFile} = require('fs').promises
const dataMiddleware = require('./middlewares/dataMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());

app.get('/', async (_request, res) => {
  //logica para consultar o banco - no json retorna os dados do banco
  try {
    const simpsons = await readFile('./simpson.json', 'utf8');
    return res.status(200).send(simpsons)
  } catch (error) {
    next(error) 
  }
});

app.get('/:id', async (req, res) => {
  const {id} = req.params;
  //logica para consultar o banco do id especificado
  res.status(201).end();
});

app.post('/', dataMiddleware, 
  (req, res, next)=> {
  next();
}, 
  async (req, res) => {
    try {
      const simpsons = await readFile('./simpson.json', 'utf8');
      const novoSimpson = req.body;
      const data = [...JSON.parse(simpsons), novoSimpson];
      // data.push(novoSimpson)
      // const newData = [...data, novoSimpson]
      writeFile('./simpson.json', JSON.stringify(data))
      return res.status(201).json({mensagem:'simpson criado com sucesso'})
    } catch (error) {
      next(error)
    }
  }
);




// app.put('/', (req, res) => res.send('entrou na rota put'));
// app.delete('/', (req, res) => res.send('entrou na rota delete'));

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
