const express = require('express');
const router = express.Router();
const pizzaController = require ('../controllers/pizza.controller.js');


//GET api/v1/pizza
router.get("/pizza", pizzaController.findAll);

//GET api/v1/pizzasearch
router.get("/pizza/search", pizzaController.findSearch);

//GET api/v1/pizza:id
router.get("/pizza/:id", pizzaController.findById);

//POST api/v1/pizza
router.post("/pizza", pizzaController.create);

//UPDATE api/v1/pizza/:id
router.put("/pizza/:id", pizzaController.findByIdAndUpdate);

//DELETE api/v1/pizza:id
router.delete("/pizza/:id", pizzaController.findByIdAndRemove);

//DELETE api/v1/pizza
router.delete("/pizza", pizzaController.removeALL);

module.exports = router;