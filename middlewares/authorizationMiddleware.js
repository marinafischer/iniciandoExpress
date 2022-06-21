const authorizationMiddleware = (req,res, next) => {
  const {authorization} = req.headers;
  if(!authorization) return next('1')
  if(authorization.length !== 20) return res.status(401).json({"message": "Token inválid"})
  next()
}

module.exports = authorizationMiddleware;