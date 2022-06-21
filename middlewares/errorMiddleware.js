const errors = [
  {
    status: 400, 
    message: "Personagem não encontrada" ,
  },
  {
    status: 401, 
    message: "Token não encontrado"
  }
]

const errorMiddleware = (error, _req, res, _next) => {
  res.status(errors[error].status).json(errors[error].message);
}

module.exports = errorMiddleware;