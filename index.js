const express = require('express')
const app = express()
const port = 3000
const readFIle = require('./helpers/readFile');
const {randomUUID} =require('crypto');
const loginMiddleware = require('./middlewares/loginMiddleware');
const authorizationMiddleware = require('./middlewares/authorizationMiddleware');
const nomeMiddleware = require('./middlewares/nomeMiddleware');
const writeFIle = require('./helpers/writeFile');

app.use(express.json());

app.get('/simpsons/:id', async (req,res)=>{
  const {id} = req.params;
  try {
    const simpsons = await readFIle();
    const simpson = simpsons.find((personagem)=> personagem.id === id);
    if(simpson) return res.status(200).json(simpson);
    return res.status(400).json({message: "Personagem não encontrada"})
  } catch (error) {
    console.log(error);
    res.status(400).json({message: 'deu algo errado'});
  }
});

app.get('/simpsons', async (req,res)=>{
  try {
    const simpsons = await readFIle();
    res.status(200).json(simpsons);
  } catch (error) {
    console.log(error);
    res.status(400).json({message: 'deu algo errado'});
  }
});

app.post('/login', loginMiddleware ,(req,res)=>{
  const token = randomUUID().split('-').join('').substring(0,20);
  res.status(200).json({token});
})

app.post('/simpsons', authorizationMiddleware,nomeMiddleware, async (req,res)=>{
  const {nome} = req.body;
  try {
    const simpsons = await readFIle();
    simpsons.push({id:simpsons.length+1,nome})
    writeFIle(simpsons)
    res.status(200).json(simpsons);
  } catch (error) {
    console.log(error);
    res.status(400).json({message: 'deu algo errado'});
  }
})

app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))