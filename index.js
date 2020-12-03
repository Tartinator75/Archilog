const mongoose = require('./src/services/mongoose.services');
const app = require('./src/services/express.services');

app.start();
mongoose.connect();
