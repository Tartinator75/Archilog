const express = require('express');
const router = express.Router();
const pizzaController = require ('../controllers/pizza.controller.js');

//GET api/user
router.get("/pizza", pizzaController.findAll);

//GET api/user/:id
router.get("/pizza/:id", pizzaController.findById);

//POST api/user
router.post("/pizza", pizzaController.create);

//UPDATE api/user/:id
router.put("/pizza/:id", pizzaController.findByIdAndUpdate);

//DELETE api/user/:id
router.delete("/pizza/:id", pizzaController.findByIdAndRemove);

//DELETE api/user
router.delete("/pizza", pizzaController.removeALL);

module.exports = router;