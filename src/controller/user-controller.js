const router = require("express").Router();
const asyncWrapper = require("../utilities/async-wrapper").AsyncWrapper;

//GET api/users
router.get("/", asyncWrapper(async (req, res) => {
    
}));

//GET api/users/:id
router.get("/:id", asyncWrapper(async (req, res) => {

}));

//POST api/users
router.post("/", asyncWrapper(async (req, res) => {

}));

//DELETE api/users
router.delete("/:id", asyncWrapper(async (req, res) => {

}));

module.exports = router;