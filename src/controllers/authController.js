const express = require('express');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const User = require('../models/user');

const router = express.Router();

function gerenateToken(userId){
    return jwt.sign({ id: userId }, authConfig.secret, { expiresIn: 86400 });
    //jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: 86400} )
}

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try{
        if( await User.findOne({ email }) ){
            return res.status(400).send({error: "User already exists"});
        }
        
        const user = await User.create(req.body);

        user.password = undefined;

        const token = gerenateToken( user.id );

        return res.send({ user, token });
    } catch (err) {
        console.log(err);
        return res.status(400).send({error: "Registration failed!"});
    }
});

router.post('/authenticate', async (req, res)=>{
    const { email, password }  = req.body;

    const user = await User.findOne({email}).select('+password');
    
    if( !user ){
        return res.status(400).send({error: "User not found"});
    }
    
    if( !await bcript.compare(password, user.password) ){
        return res.status(400).send({error: "Invalid password!"});
    }

    user.password = undefined;

    const token = gerenateToken( user.id );

    res.send({ user, token });
})

module.exports = api => api.use('/auth', router);