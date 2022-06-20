const nomeMiddleware = (req,res,next)=>{
  const {nome} = req.body;
  if(!nome) return res.status(400).json({
    "message": "O campo \"nome\" é obrigatório"
  });
  if(nome.length < 3) return res.status(400).json({
    "message": "O \"nome\" deve ter pelo menos 3 caracteres"
  });
  return next()
}

module.exports = nomeMiddleware;