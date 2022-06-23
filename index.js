const express = require('express')
const app = express()
const port = 3000
const simpsonRoute = require('./Routes/simpsonRoute');
const loginRoute = require('./Routes/loginRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());

app.use('/simpsons', simpsonRoute);

app.use('/login', loginRoute);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))