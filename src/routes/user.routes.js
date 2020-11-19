const express = require('express');
const router = express.Router();
const userController = require ('../controllers/user.controller.js');

//GET api/user
router.get("/user", userController.findAll);

//GET api/user/:id
router.get("/user/:id", userController.findById);

//POST api/user
router.post("/user", userController.create);

//UPDATE api/user/:id
router.put("/user/:id", userController.findByIdAndUpdate);

//DELETE api/user/:id
router.delete("/user/:id", userController.findByIdAndRemove);

//DELETE api/user
router.delete("/user", userController.removeALL);

module.exports = router;