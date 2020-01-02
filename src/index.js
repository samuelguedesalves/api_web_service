const express = require('express');
const cors = require('cors');
const axios = require('axios').default;

const authUser = require('./authUser');

const api = express();

api.use(cors());
api.use(express.json());

const apiPort = process.env.PORT || 4567 ;

api.listen( apiPort , ()=>{
    console.log('API is run in port: '+ apiPort);
});



//-----------------ROUTERS-------------------

//login router
api.post('/login', (req, res)=>{
    const email = req.body.user_email;
    const password = req.body.user_password;

    if(email != "" && password != ""){
        axios.get('https://carrot-9b7e4.firebaseio.com/Carrot/Users.json')
            .then((response_database) => {
                var state = false;
                for(var i in response_database.data){
                    if(response_database.data[i].email === email){
                        if(response_database.data[i].password === password){
                            state = true;
                            var tokenUser = authUser.addUser(i);
                            res.send({log: true, username: response_database.data[i].name, token: tokenUser });
                        }else{
                            state = true;
                            res.send({ log: false });
                        }
                    }
                }

                if(!state){
                    res.send({ log: false });
                }

            })
            .catch((error_database) =>{
                res.send({ log: false });
            });
    }else{
        res.send({ log: false });
    }
});


//signup user router
api.post('/new_user', (req, res)=>{
    const name = req.body.name_user;
    const email = req.body.email_user;
    const password = req.body.password_user;

    if (name && email && password){
        
        axios.get('https://carrot-9b7e4.firebaseio.com/Carrot/Users.json')
            .then((response) => {
                var state = false;

                for(var i in response.data){
                    if(response.data[i].email === email){
                        state = true;
                        res.send({ insert: false });
                    };  
                }

                if(!state){
                    axios.post('https://carrot-9b7e4.firebaseio.com/Carrot/Users.json', {
                            name: name,
                            email: email,
                            password: password,
                        })
                        .then((data) => {
                            res.send({ insert: true });
                        })
                        .catch((err) => {
                            res.send({ insert: false });
                        });
                }

            })
            .catch((err)=>{
                res.send({ insert: false });
            });
    }else{
        res.send({ insert: false });
    }
});

// rota de listagem de produtos
api.get('/my_task', (req, res)=>{
    
});

function countObject(obj){
    var count = 0;

    for(var k in obj){
        if(obj.hasOwnProperty(k)) count ++;
    };

    return count;
}

api.get('/', (req, res) => {
    axios.get('https://carrot-9b7e4.firebaseio.com/Carrot/Users.json')
            .then((response) => {
                res.send( response.data );
            })
            .catch((err)=>{
                res.send({ insert: false });
            });
});