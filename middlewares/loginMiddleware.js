const loginMiddleware = (req,res,next)=>{
  const {nome, senha} = req.body;
  if(!nome) return res.status(400).json({
    "message": "O campo \"nome\" é obrigatório"
  });
  if(nome.length < 3) return res.status(400).json({
    "message": "O \"nome\" deve ter pelo menos 3 caracteres"
  });
  if(!senha) return res.status(400).json({
    "message": "O campo \"senha\" é obrigatório"
  });
  if(senha.length < 5) return res.status(400).json({
    "message": "O \"senha\" deve ter pelo menos 5 caracteres"
  });
  return next()
}

module.exports = loginMiddleware;