require('dotenv').config({path:'.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const routes = require('./routes')

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));

server.use('/api', routes);

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor está rodando em: https://localhost:${process.env.PORT}`)
});