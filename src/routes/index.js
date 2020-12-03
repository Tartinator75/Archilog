const express = require('express');
const router = express.Router();
const pizzaRouter = require('./pizza.routes');
const authRouter = require('./auth.routes');
 
router.use(pizzaRouter);
router.use(authRouter);
 
module.exports = router;