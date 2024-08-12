
// router/user.js

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../module/user')

router.post('/signup', (req,res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    newUser
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err))
});

router.post('/login', (req,res)=>{
    const {username, password} = req.body;
    User.findOne({username}).then(user => {
        if(!user){
            return res.status(404).json({ usernameNotFound: 'Username not found' });
        }
        if(user.password== password){
            const payload = {id: user.id, username: user.username};
            jwt.sign(
                payload,
                'secret',
                { expiresIn: 3600},
                (err, token) => {
                    res.json({
                      success: true,
                      token: 'Bearer ' + token
                    });
                }
            );
        }
        else {
            return res.status(400).json({ passwordIncorrect: 'Password incorrect' });
          }
    })
})

module.exports = router;
