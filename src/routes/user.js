const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/', (req, res) => {
    res.send("We are on user")    
});

router.post('/', (req,res) => {
    console.log(req.body);
    const user = new User ({
        email: req.body.email,
        password: req.body.password,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        age: req.body.age,
        admin: req.body.admin
    });

    user.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err});
    })
});

module.exports = router;