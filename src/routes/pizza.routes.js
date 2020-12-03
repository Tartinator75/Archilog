const express = require('express');
const router = express.Router();
const pizzaController = require ('../controllers/pizza.controller.js');

// Routes
/**
 * @swagger
 * /api/v1/pizza:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
//GET api/pizza
router.get("/pizza", pizzaController.findAll);

//GET api/pizza/search
router.get("/pizza/search", pizzaController.findSearch);

//GET api/pizza/:id
router.get("/pizza/:id", pizzaController.findById);

//POST api/pizza
router.post("/pizza", pizzaController.create);

//UPDATE api/pizza/:id
router.put("/pizza/:id", pizzaController.findByIdAndUpdate);

//DELETE api/pizza/:id
router.delete("/pizza/:id", pizzaController.findByIdAndRemove);

//DELETE api/pizza
router.delete("/pizza", pizzaController.removeALL);

module.exports = router;