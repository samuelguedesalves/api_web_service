const express = require('express');
const cors = require('cors');
const axios = require('axios').default;

const authUser = require('./authUser');

//config
const api = express();

api.use(cors());
api.use(express.json());


require ("./controllers/authController")(api);
require ("./controllers/appControler")(api);

const apiPort = process.env.PORT || 4567 ;

api.listen( apiPort , ()=>{
    console.log('API is run in port: '+ apiPort);
});