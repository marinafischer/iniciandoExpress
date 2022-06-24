const Joi = require('joi');

const USER = Joi.object({
  nome: Joi.string().min(3).required(),
  senha: Joi.string().min(5).required(),
});


const loginMiddleware = (req,res,next)=>{
  const user = req.body;
  const {error} = USER.validate(user);
  if(error) return res.status(400).json(error.message)
  return next()
}

module.exports = loginMiddleware;


  // const {nome, senha} = req.body;
  // if(!nome) return res.status(400).json({
  //   "message": "O campo \"nome\" é obrigatório"
  // });
  // if(nome.length < 3) return res.status(400).json({
  //   "message": "O \"nome\" deve ter pelo menos 3 caracteres"
  // });
  // if(!senha) return res.status(400).json({
  //   "message": "O campo \"senha\" é obrigatório"
  // });
  // if(senha.length < 5) return res.status(400).json({
  //   "message": "O \"senha\" deve ter pelo menos 5 caracteres"
  // });