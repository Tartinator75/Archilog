const mongoose = require('./src/services/mongoose.services');
const app = require('./src/services/express.services');
const UserController = require("./controllers/user-controller");
app.use("/api/plans", UserController);

app.start();
mongoose.connect();