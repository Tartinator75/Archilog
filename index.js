const mongoose = require('./src/services/mongoose.services');
const app = require('./src/services/express.services');

app.start();
mongoose.connect();


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
 * /api/v1/pizza/:id:
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
 * /api/v1/pizza/:id:
 *   put:
 *     description: update Pizza
 *   
 *     responses:
 *       201:
 *         description: Created
 */

 /**
 * @swagger
 * /api/v1/pizza/:id:
 *   delete:
 *     description: delete Pizza
 *   
 *     responses:
 *       201:
 *         description: deleted
 */

 /**
 * @swagger
 * /api/v1/pizza:
 *   delete:
 *     description: delete all Pizza
 *   
 *     responses:
 *       201:
 *         description: deleted
 */

 /**
 * @swagger
 * /api/v1/pizza/search:
 *  get:
 *    description: Use to request pizza by search
 *    responses:
 *      '200':
 *        description: A successful response
 */
