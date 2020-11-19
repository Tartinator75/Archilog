const express = require('express');
const router = express.Router();
const userController = require ('../controllers/user.controller.js');

//GET api/user
router.get("/api/user", userController.findAll);

//GET api/user/:id
router.get("/api/user/:id", userController.findById);

//POST api/user
router.post("/api/user", userController.create);

//UPDATE api/user/:id
router.post("/api/user/:id", userController.findByIdAndUpdate);

//DELETE api/user/:id
router.delete("/api/user/:id", userController.findByIdAndRemove);

//DELETE api/user
router.delete("/api/user", userController.removeALL);

module.exports = router;