import express from 'express';

import bodyParser from 'body-parser'; // allows incoming post request

import usersRoutes from './routes/users.js';
const app = express();

const PORT = 5000;

app.use(bodyParser.json()); // json sending and accepting data to rest api javascript notation

app.use('/users', usersRoutes);
app.get('/', (req, res) => { res.send('HELLO HOMEPAGE') }); //route

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

//nodemon helps to automatically update the changes without terminal

