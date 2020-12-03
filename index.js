const mongoose = require('./src/services/mongoose.services');
const app = require('./src/services/express.services');

app.start();
mongoose.connect();
<<<<<<< HEAD


// Swagger Doc
    // Routes
/**
 * @swagger
 * /api/v1/pizza:
 *  get:
 *    description: Use to request all pizza
 *    responses:
 *      '200':
 *        description: A successful response
 */

 /**
 * @swagger
 * /api/pizza/:id:
 *  get:
 *    description: Use to request pizza by id
 *    responses:
 *      '200':
 *        description: A successful response
 */

 /**
 * @swagger
 * /api/v1/pizza:
 *   post:
 *     description: Post Pizza
 *   
 *     responses:
 *       201:
 *         description: Created
 */

 /**
 * @swagger
 * /api/pizza/:id:
 *   put:
 *     description: update Pizza
 *   
 *     responses:
 *       201:
 *         description: Created
 */

 /**
 * @swagger
 * /api/pizza/:id:
 *   delete:
 *     description: delete Pizza
 *   
 *     responses:
 *       201:
 *         description: deleted
 */

 /**
 * @swagger
 * /api/pizza:
 *   delete:
 *     description: delete all Pizza
 *   
 *     responses:
 *       201:
 *         description: deleted
 */

 /**
 * @swagger
 * /api/pizza/search:
 *  get:
 *    description: Use to request pizza by search
 *    responses:
 *      '200':
 *        description: A successful response
 */
=======
>>>>>>> 22d314efe6555d5d56d9d770efcc413a7885fe60
