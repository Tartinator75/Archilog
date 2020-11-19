const express = require('express');
const router = express.Router();
const pizzaRouter = require('./pizza.routes');

router.use(pizzaRouter);

module.exports = router;